"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Calendar24 } from "@/components/item-identification/date-time-picker";

export default function ItemIdentificationPage() {
  const [step, setStep] = useState(1);
  const [image, setImage] = useState<File | null>(null);
  const [identifiedItems, setIdentifiedItems] = useState<string[]>([]);
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [collectionMethod, setCollectionMethod] = useState("pickup");
  const [selectedCenter, setSelectedCenter] = useState<string | null>(null);
  const [appointmentDate, setAppointmentDate] = useState<Date | undefined>();
  const [appointmentTime, setAppointmentTime] = useState("");

  // Fake API call placeholder
  async function scanWithGoogleVision(file: File) {
    // TODO: call your real API route
    // const result = await fetch("/api/vision", { method: "POST", body: file });

    return ["Plastic Bottle", "Cardboard"]; // placeholder sample
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);

    const results = await scanWithGoogleVision(file);
    setIdentifiedItems(results);
    setShowVisionModal(true);
  }

  const recyclingCenters = [
    { id: "a", name: "EcoCentre Subang", accepts: ["Plastic", "Cardboard"] },
    { id: "b", name: "GreenEarth PJ", accepts: ["Glass", "Electronics"] },
    { id: "c", name: "Bukit Jalil Recycling Point", accepts: ["Plastic", "Metal"] },
  ];

  const filteredCenters = recyclingCenters.filter(center =>
    identifiedItems.some(item =>
      center.accepts.some(mat => item.toLowerCase().includes(mat.toLowerCase()))
    )
  );

  return (
    <div className="max-w-2xl mx-auto py-10 space-y-10 text-white">

      {/* STEP TITLE */}
      <h1 className="text-3xl font-bold">Recycle Item Submission</h1>
      <p className="text-gray-300">Step {step} of 5</p>

      {/* -------------------- STEP 1 : UPLOAD IMAGE -------------------- */}
      {step === 1 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Upload an image of your items</h2>

          <Input type="file" accept="image/*" onChange={handleImageUpload} />

          <Button disabled={!image} onClick={() => image && setStep(2)}>
            Continue
          </Button>
        </div>
      )}

      {/* -------------------- VISION MODAL -------------------- */}
      <Dialog open={showVisionModal} onOpenChange={setShowVisionModal}>
        <DialogContent className="text-black">
          <DialogHeader>
            <DialogTitle>Google Vision Identified:</DialogTitle>
          </DialogHeader>

          <ul className="space-y-1">
            {identifiedItems.map((item, idx) => (
              <li key={idx} className="font-medium">{item}</li>
            ))}
          </ul>

          <Button className="mt-4" onClick={() => setShowVisionModal(false)}>
            Confirm
          </Button>
        </DialogContent>
      </Dialog>

      {/* -------------------- STEP 2 : PICKUP OR DROPOFF -------------------- */}
      {step === 2 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">How would you like to recycle?</h2>

          <RadioGroup value={collectionMethod} onValueChange={setCollectionMethod}>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="pickup" id="pickup" />
              <Label htmlFor="pickup">Schedule a Pickup</Label>
            </div>

            <div className="flex items-center space-x-3">
              <RadioGroupItem value="dropoff" id="dropoff" />
              <Label htmlFor="dropoff">Drop-off at a Recycling Centre</Label>
            </div>
          </RadioGroup>

          <Button onClick={() => setStep(3)}>Continue</Button>
        </div>
      )}

      {/* -------------------- STEP 3 : SELECT RECYCLING CENTER -------------------- */}
      {step === 3 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Nearby Recycling Centres</h2>

          {filteredCenters.length === 0 ? (
            <p>No centers match this material type.</p>
          ) : (
            <div className="space-y-3">
              {filteredCenters.map(center => (
                <div
                  key={center.id}
                  onClick={() => setSelectedCenter(center.id)}
                  className={`p-4 rounded-lg border cursor-pointer ${
                    selectedCenter === center.id
                      ? "bg-green-600/40 border-green-500"
                      : "bg-white/5 border-white/20"
                  }`}
                >
                  <h3 className="font-semibold">{center.name}</h3>
                  <p className="text-sm text-gray-300">Accepts: {center.accepts.join(", ")}</p>
                </div>
              ))}
            </div>
          )}

          <Button disabled={!selectedCenter} onClick={() => setStep(4)}>
            Continue
          </Button>
        </div>
      )}

      {/* -------------------- STEP 4 : DATE & TIME -------------------- */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Select Date & Time</h2>

          <Calendar24
            date={appointmentDate}
            setDate={setAppointmentDate}
            time={appointmentTime}
            setTime={setAppointmentTime}
          />

          <Button disabled={!appointmentDate || !appointmentTime} onClick={() => setStep(5)}>
            Continue
          </Button>
        </div>
      )}

      {/* -------------------- STEP 5 : FINISH -------------------- */}
      {step === 5 && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Submission Complete!</h2>

          <p>Your recycling submission has been recorded.</p>

          <Button onClick={() => setStep(1)}>Submit Another</Button>
        </div>
      )}
    </div>
  );
}
