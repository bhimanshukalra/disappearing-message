"use client";

import Typewriter from "@/components/Typewriter";
import { useEffect, useState } from "react";

export default function Home() {
  const [isInitialized, setIsInitialized] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsInitialized(true), 1000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col justify-between p-10">
      <div>
        <p className="">Following is a disappearing message: </p>
        {isInitialized && (
          <Typewriter
            start=""
            input={`The Principal
National Model Public School

Anna Nagar
Chennai – 600054.
10/06/2021

Subject: Request for On-Duty application for two days

Respected Sir,


I am Mithuna M, a student of Class X C. I have been selected to participate in the State Level Athletic Competitions that is to be held on the 15th and 16th of this month at the M A Chidambaram Stadium, Chepauk. I require an attested on-duty application to be able to represent the school and participate in the competitions. I request you to kindly provide me with a bonafide certificate and an on-duty application so that I would not lose my attendance.


Thanking you
Yours sincerely,
Mithuna M
Class X C
Roll No. 32`}
            delay={100}
          />
        )}
      </div>
    </main>
  );
}
