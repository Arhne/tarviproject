export type LocalEvent = {
  id: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  image: string;
  status: "past" | "upcoming";
};

export const localEvents: LocalEvent[] = [
  {
    id: "abia-smart-city-meeting",
    title: "Abia Smart City engagement with Gov. Alex Otti",
    date: "2024-06-08",
    location: "Abia State, Nigeria",
    summary:
      "TARV’s founding leadership met Governor Alex Otti to present the New Abia Smart City vision, aligning investment, technology, and diaspora interest with the state’s digital economy agenda.",
    image: "/gallery/official-meeting-delegation.png",
    status: "past",
  },
  {
    id: "abia-follow-up",
    title: "Follow-up delegation with African Rebirth partners",
    date: "2024-07-20",
    location: "Abia State, Nigeria",
    summary:
      "A broader TARV partner delegation returned to Abia for continued talks on smart-city delivery, land readiness, and investment collaboration with the state government.",
    image: "/gallery/office-visit-delegation.png",
    status: "past",
  },
  {
    id: "vinci-hapel-jv",
    title: "VINCI Construction × Hapel joint venture ceremony",
    date: "2003-01-01",
    location: "France / Nigeria",
    summary:
      "Hapel leadership joined VINCI Construction directors to formalize a joint venture with one of the world’s largest construction groups — a foundation of TARV’s delivery heritage.",
    image: "/gallery/vinci-hapel-joint-venture.png",
    status: "past",
  },
  {
    id: "stefanutti-hapel-jv",
    title: "Stefanutti Stocks × Hapel partnership",
    date: "2010-01-01",
    location: "South Africa / Nigeria",
    summary:
      "Directors of Stefanutti Stocks and Hapel marked their joint venture — a collaboration that helped deliver thousands of jobs and major infrastructure programmes across the region.",
    image: "/gallery/stefanutti-hapel-jet.png",
    status: "past",
  },
  {
    id: "ufuma-road-flagging",
    title: "Flagging of the Ufuma road project",
    date: "2008-01-01",
    location: "Anambra State, Nigeria",
    summary:
      "His Excellency Mr. Peter Obi, then Governor of Anambra State, flagged off the Ufuma road project — a landmark infrastructure engagement in Hapel’s delivery record.",
    image: "/gallery/ufuma-road-flagging.png",
    status: "past",
  },
  {
    id: "ette-abak-commissioning",
    title: "Commissioning of the Ette-Abak project",
    date: "2005-01-01",
    location: "Nigeria",
    summary:
      "His Excellency Chief Olusegun Obasanjo, President of the Federal Republic of Nigeria, commissioned the Ette-Abak project — underscoring national recognition of Hapel’s infrastructure work.",
    image: "/gallery/ette-abak-commissioning.png",
    status: "past",
  },
  {
    id: "media-briefing",
    title: "National media briefing on investment partnerships",
    date: "2024-06-09",
    location: "Nigeria",
    summary:
      "TARV leadership addressed national media on partnership opportunities, investment readiness, and Africa’s development narrative.",
    image: "/gallery/press-briefing.png",
    status: "past",
  },
];
