import { NextResponse } from 'next/server';

function normalizeAppointmentTime(time) {
  if (!time) return '';
  const trimmed = time.trim();
  const timeMatch = trimmed.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!timeMatch) return trimmed;

  let hours = Number(timeMatch[1]);
  const minutes = timeMatch[2];
  const meridiem = timeMatch[3].toUpperCase();

  if (meridiem === 'AM') {
    if (hours === 12) hours = 0;
  } else if (hours !== 12) {
    hours += 12;
  }

  return `${String(hours).padStart(2, '0')}:${minutes}`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { fullName, phone, doctor, problem, date, time } = body;

    if (!fullName || !phone || !date || !time) {
      return NextResponse.json(
        { success: false, error: 'Full name, phone, date, and time are required.' },
        { status: 400 }
      );
    }

    let doctorName = 'Dr. Vipeen Raut';
    let specialty = 'Orthopaedic';
    if (doctor === 'dr-shillpa-raut' || (typeof doctor === 'string' && doctor.toLowerCase().includes('shillpa'))) {
      doctorName = 'Dr. Shillpa Raut';
      specialty = 'Gynecology & Obstetrics';
    } else if (doctor === 'dr-vipeen-raut' || (typeof doctor === 'string' && doctor.toLowerCase().includes('vipeen'))) {
      doctorName = 'Dr. Vipeen Raut';
      specialty = 'Orthopaedics';
    }

    const normalizedTime = normalizeAppointmentTime(time);
    const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL || 'https://jovial-sheep-76.convex.cloud';

    const mutationPayload = {
      path: 'appointments:create',
      args: {
        name: fullName.trim(),
        phone: phone.trim(),
        date: date.trim(),
        time: normalizedTime,
        doctor_name: doctorName,
        dental_problem: problem || undefined,
        notes: `Booked via website | Specialty: ${specialty} | Slot: ${time}`,
      },
      format: 'json',
    };

    const convexRes = await fetch(`${convexUrl}/api/mutation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mutationPayload),
    });

    const result = await convexRes.json();

    if (result.status === 'error') {
      if (result.errorMessage && result.errorMessage.includes('already booked')) {
        return NextResponse.json(
          {
            success: false,
            error: 'This slot is already booked for this doctor. Please select another time.',
          },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, error: result.errorMessage || 'Failed to book appointment.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      appointmentId: result.value,
      message: 'Appointment booked successfully.',
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
