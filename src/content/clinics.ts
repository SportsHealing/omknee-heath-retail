/** SportsHealing clinics (decision D12) and online consultations. Addresses are placeholders until confirmed (Q6). */
import { clinicBookingUrl, type ClinicId } from "@/lib/partners";

export interface Clinic {
  id: ClinicId;
  name: string;
  /** Where, as shown in the Treat "Ways to be seen" table. */
  where: string;
  address: string;
  bestFor: string;
  bookLabel: string;
  bookingUrl: string;
}

export const CLINICS: Clinic[] = [
  {
    id: "harley-street",
    name: "SportsHealing Harley Street",
    where: "[address], London",
    address: "[address]",
    bestFor: "Full assessment, examination, treatment planning",
    bookLabel: "Book Harley Street",
    bookingUrl: clinicBookingUrl("harley-street"),
  },
  {
    id: "chiswick",
    name: "SportsHealing at HCA Chiswick",
    where: "[address], London",
    address: "[address]",
    bestFor: "Full assessment, examination, treatment planning",
    bookLabel: "Book Chiswick",
    bookingUrl: clinicBookingUrl("chiswick"),
  },
  {
    id: "pmc",
    name: "HCA Platinum Medical Centre, at The Wellington Hospital",
    where: "The Wellington Hospital, [address], London",
    address: "[address]",
    bestFor: "Full assessment, examination, treatment planning",
    bookLabel: "Book Platinum Medical Centre",
    bookingUrl: clinicBookingUrl("pmc"),
  },
];

export const ONLINE_CONSULTATION: Clinic = {
  id: "online",
  name: "Online consultation",
  where: "Video call, anywhere in the UK",
  address: "From anywhere in the UK",
  bestFor: "Advice, reviewing scan results, deciding next steps",
  bookLabel: "Book online",
  bookingUrl: clinicBookingUrl("online"),
};
