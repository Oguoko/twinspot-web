import { NextResponse } from "next/server";

type InquiryPayload = {
  fullName: string;
  email: string;
  travelDates?: string;
  budget?: string;
  interests: string;
};

function isValidPayload(payload: unknown): payload is InquiryPayload {
  if (!payload || typeof payload !== "object") {
    return false;
  }

  const candidate = payload as Record<string, unknown>;

  return (
    typeof candidate.fullName === "string" &&
    candidate.fullName.trim().length > 0 &&
    typeof candidate.email === "string" &&
    candidate.email.trim().length > 0 &&
    typeof candidate.interests === "string" &&
    candidate.interests.trim().length > 0 &&
    (candidate.travelDates === undefined ||
      typeof candidate.travelDates === "string") &&
    (candidate.budget === undefined || typeof candidate.budget === "string")
  );
}

export async function POST(request: Request) {
  try {
    const payload: unknown = await request.json();

    if (!isValidPayload(payload)) {
      return NextResponse.json(
        { ok: false, error: "Validation error" },
        { status: 400 }
      );
    }

    console.log("Inquiry payload:", payload);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Inquiry submission failed:", error);

    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
