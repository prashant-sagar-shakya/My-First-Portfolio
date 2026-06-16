import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>New Portfolio Inquiry from {senderEmail}</Preview>
        <Body className="bg-white text-[#1e293b] font-sans m-0 p-0">
          {/* Full-bleed Outer Wrapper Section (No margins or paddings) */}
          <Section className="w-full bg-white m-0 p-0" align="center">
            
            {/* Main Content Card (Stretches flush to screen edges on mobile) */}
            <Section 
              align="center" 
              className="bg-white w-full max-w-[600px] text-left overflow-hidden mx-auto"
            >
              
              {/* Premium Header Accent Bar (Flush at the top) */}
              <Section className="bg-[#0f172a] py-10 px-6 border-b-4 border-blue-500 text-center" align="center">
                <Heading className="text-white text-xl font-bold tracking-wider m-0 uppercase leading-snug">
                  Portfolio Contact Inquiry
                </Heading>
              </Section>

              {/* Spacious Body Section */}
              <Section className="py-10 px-3">
                
                {/* Introduction & Greetings */}
                <Text className="text-[16px] font-bold text-[#0f172a] m-0 px-1">
                  Hello Prashant,
                </Text>
                <Text className="text-[14px] leading-relaxed text-[#475569] mt-3 mb-6 px-1">
                  This is a secure notification. A visitor has submitted a new inquiry through the contact form on your portfolio website. Below are the details of the communication log:
                </Text>
                
                {/* Visual Quotation Block (Expanded width, reduced padding) */}
                <Section className="bg-[#f8fafc] border-l-4 border-blue-500 rounded-r-lg py-3 px-4 my-5 shadow-inner">
                  <Text className="text-[11px] uppercase text-[#64748b] font-bold tracking-widest m-0 mb-2">
                    Message Body
                  </Text>
                  <Text className="text-[14px] leading-relaxed text-[#0f172a] whitespace-pre-wrap m-0 italic font-medium break-words">
                    "{message}"
                  </Text>
                </Section>

                <Hr className="border-[#e2e8f0] my-6" />

                {/* Highly Structured Metadata Dashboard (Expanded width, reduced padding) */}
                <Section className="bg-[#f1f5f9] rounded-lg py-4 px-4">
                  <Text className="text-[12px] uppercase text-[#64748b] font-bold tracking-widest m-0 mb-4">
                    Submission Data Log
                  </Text>
                  
                  {/* Grid list elements */}
                  <Section className="mb-4">
                    <Text className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider m-0 mb-1">
                      Sender Email Address
                    </Text>
                    <Link 
                      href={`mailto:${senderEmail}`} 
                      className="text-[14px] text-blue-600 font-mono underline break-all m-0 font-medium"
                    >
                      {senderEmail}
                    </Link>
                  </Section>

                  <Section className="mb-4">
                    <Text className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider m-0 mb-1">
                      Submission Source
                    </Text>
                    <Text className="text-[14px] text-[#334155] m-0 font-medium">
                      Personal Portfolio Form (prashantsagar.dev)
                    </Text>
                  </Section>
                  
                  <Section>
                    <Text className="text-[10px] font-bold text-[#64748b] uppercase tracking-wider m-0 mb-1">
                      Date & Time Received
                    </Text>
                    <Text className="text-[14px] text-[#334155] m-0 font-medium">
                      {new Date().toLocaleDateString(undefined, {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        timeZoneName: 'short'
                      })}
                    </Text>
                  </Section>
                </Section>

                {/* Direct Action Button */}
                <Section className="text-center mt-6 mb-2" align="center">
                  <Link
                    href={`mailto:${senderEmail}`}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[14px] py-3 px-6 rounded-lg shadow-sm text-center no-underline transition-colors"
                  >
                    Reply to Sender
                  </Link>
                </Section>
              </Section>

              {/* Professional Footer & Security Notice */}
              <Section className="bg-[#f8fafc] py-12 px-6 border-t border-[#e2e8f0] text-center" align="center">
                <Text className="text-[11px] text-[#94a3b8] m-0 leading-relaxed">
                  This message was transmitted using secure SSL encryption via your portfolio server actions.
                  <br />
                  Please review the sender's credentials before replying or taking further action.
                </Text>
              </Section>
            </Section>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  );
}
