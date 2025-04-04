import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Collection001Landing() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const launchDate = new Date("2025-05-01T00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">GAMBLERS</h1>
        <p className="text-lg uppercase tracking-widest text-gray-400">Collection 001 – The Birth of a New Era</p>
        <p className="text-xl mt-2 font-light italic text-gray-300">Bet on Yourself</p>
      </div>

      <div className="text-center">
        <p className="uppercase text-gray-500 tracking-wider mb-2">Launching in:</p>
        <div className="flex space-x-4 justify-center text-3xl font-mono">
          <span>{timeLeft.days}d</span>
          <span>{timeLeft.hours}h</span>
          <span>{timeLeft.minutes}m</span>
          <span>{timeLeft.seconds}s</span>
        </div>
      </div>

      <div className="max-w-xl text-center text-gray-400 leading-relaxed">
        <p>
          In a world that bets against you, we created a movement for those who rise above. Gamblers is more than a brand – it's a mindset. Collection 001 marks the beginning of an era where self-belief isn't optional, it's essential.
        </p>
      </div>

      <Card className="bg-white text-black w-full max-w-md">
        <CardContent className="p-6 space-y-4">
          <p className="text-lg font-semibold text-center">Join the Waitlist</p>
          <div className="flex space-x-2">
            <Input placeholder="Your email" className="flex-1" />
            <Button className="bg-black text-white">Notify Me</Button>
          </div>
          <p className="text-xs text-gray-600 text-center">Get exclusive early access. Limited drops only.</p>
        </CardContent>
      </Card>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 pt-12">
        <Image src="/GTM IMG_8451.jpg" alt="Gamblers Look 1" width={800} height={1000} className="rounded-xl" />
        <Image src="/GTM IMG_8453.jpg" alt="Gamblers Look 2" width={800} height={1000} className="rounded-xl" />
        <Image src="/GTM IMG_8454.jpg" alt="Gamblers Packaging" width={800} height={1000} className="rounded-xl" />
        <Image src="/GTM IMG_8455.jpg" alt="Gamblers Campaign" width={800} height={1000} className="rounded-xl" />
        <Image src="/GTM IMG_8456.jpg" alt="Gamblers Look 3" width={800} height={1000} className="rounded-xl" />
      </div>
    </div>
  );
}
