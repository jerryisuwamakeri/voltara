"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, MessageCircle } from "lucide-react";
import { FAQS } from "@/lib/data";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section bg-cream">
      <div className="shell container-px grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        {/* Intro */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">Questions</span>
          <h2 className="display display-lg mt-4">Everything you want to know</h2>
          <p className="lead mt-4">
            Still unsure about something? Our team is one message away and happy to help you size the right system.
          </p>
          <Link href="/contact" className="btn btn-dark mt-7">
            <MessageCircle className="h-4 w-4" /> Ask a question
          </Link>
        </div>

        {/* Accordion */}
        <div>
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="faq-item">
                <button
                  className="faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {item.q}
                  <span className="chip h-9 w-9 shrink-0 rounded-full">
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? 240 : 0 }}>
                  <div className="faq-a-inner">{item.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
