import { QUIZ_PROMPT } from "@/services/Constants";
import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {
  //
  const { description, interviewType, position, duration } =
    await request.json();
  console.log("Received data:", {
    description,
    interviewType,
    position,
    duration,
  });

  const FINAL_PROMPT = QUIZ_PROMPT.replace("{{job description}}", description)
    .replace("{{interview type}}", interviewType)
    .replace("{{job title}}", position)
    .replace("{{interview duration}}", duration);
  //console.log("Final Prompt:", FINAL_PROMPT);

  try {
    const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.OPENROUTER_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-3.3-8b-instruct:free",
      messages: [{ role: "user", content: FINAL_PROMPT }],
    });
    console.log(completion.choices[0].message.content);
    return NextResponse.json(
      { message: completion.choices[0].message.content },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to generate quiz. Please try again." },
      { status: 500 }
    );
  }
}
