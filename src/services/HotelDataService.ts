import api from "@/configs/common";

class HotelDataService {
  getAll() {
    return api.get("/yickson/serverjson/hotels");
  }
  getOne(id: number) {
    return api.get(`/yickson/serverjson/hotels/${id}`);
  }
}

export default new HotelDataService();
