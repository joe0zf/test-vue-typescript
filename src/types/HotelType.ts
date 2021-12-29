export default interface Hotel {
  id: number;
  description: string;
  external_url: string;
  image: string;
  name: string;
  attributes: {
    rarity: number;
    rooms: number;
    staff: number;
  };
}
