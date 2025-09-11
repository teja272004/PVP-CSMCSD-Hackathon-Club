import { FC, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AnnouncementsModal: FC = () => {
  const [open, setOpen] = useState(false);

  // Open modal automatically on page load/refresh
  useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            📢 Idea Hackathon Club – Join the Hackathon!
          </DialogTitle>
          <DialogDescription>
            🔥 Let’s innovate, compete & create something impactful! 💡
          </DialogDescription>
        </DialogHeader>

        {/* Event Details */}
        <div className="space-y-4 text-foreground">
          <p>
            📅 <strong>Date:</strong> 27th Sept 2025 (Saturday) <br />
            ⏱ <strong>Duration:</strong> 8 Hours (Offline) <br />
            👥 <strong>Team Size:</strong> 3–4 Members <br />
            🎓 <strong>Eligibility:</strong> 2nd, 3rd & 4th Year Students of
            CSE | CSM | CSD | IT | ECE | EEE | MEC | CIVIL (PVPSIT)
          </p>

          <div>
            <h3 className="font-semibold">📌 Rounds & Timeline</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              <li>Registrations Open: 10th Sept 2025</li>
              <li>
                Round 1 – Prototype Submission (Deadline: 18th Sept)  
                <ul className="list-disc list-inside ml-6">
                  <li>Problem Statement</li>
                  <li>Solution & Workflow</li>
                  <li>Prototype/Working Model</li>
                  <li>Tools/Technologies Used</li>
                  <li>Expected Results</li>
                  <li>Advantages/Impact</li>
                </ul>
              </li>
              <li>Round 1 Results: Announced by 24th Sept</li>
              <li>
                Round 2 – Final Hackathon (Offline)  
                📅 27th Sept 2025 (Friday) – ⏱ 8-hour Hackathon
              </li>
              <li>🎖 Certificates for all Final Teams</li>
              <li>🏆 Prize Money for Winners</li>
            </ul>
          </div>

          {/* Register Button */}
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 text-white hover:bg-green-700"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfKc8lj86yK2mRhsV-8lNRCBrWh8natG5snHWa2nhcOeKeXtw/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnnouncementsModal;
