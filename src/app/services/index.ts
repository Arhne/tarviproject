export type ServiceItem = {
  key: number;
  title: string;
  summary: string;
  pic: string;
};

export const services: ServiceItem[] = [
  {
    key: 1,
    title: "Investment facilitation",
    summary:
      "We convene investors, governments, and businesses through dialogues and summits that surface bankable opportunities across African markets.",
    pic: "/gallery/press-briefing.png",
  },
  {
    key: 2,
    title: "Public–private partnerships",
    summary:
      "TARV structures constructive partnerships that align public policy with private capital — protecting community interests while unlocking growth.",
    pic: "/gallery/official-meeting-delegation.png",
  },
  {
    key: 3,
    title: "Policy & regulatory advocacy",
    summary:
      "We engage regulators and agencies to champion bottom-up policy that improves the investment climate and accelerates job creation.",
    pic: "/gallery/office-visit-delegation.png",
  },
  {
    key: 4,
    title: "Infrastructure & project delivery",
    summary:
      "Drawing on Hapel’s construction heritage and global JV partners, we support site preparation, roads, and built-environment programmes that make investment real.",
    pic: "/gallery/infrastructure-excavation.png",
  },
  {
    key: 5,
    title: "MSME growth & inclusion",
    summary:
      "We create networking pathways for micro, small, and medium enterprises so local businesses can participate equitably in continental opportunity.",
    pic: "/gallery/formal-banquet.png",
  },
  {
    key: 6,
    title: "Media, rebranding & narrative",
    summary:
      "Through strategic media partnerships, we elevate Africa’s investment story — improving country attractiveness and sustaining investor interest.",
    pic: "/gallery/press-statement.png",
  },
];
