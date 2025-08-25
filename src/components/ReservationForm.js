import { useState } from "react";

function ReservationForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("none");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  return (
    <form>
      <label htmlFor="date">Date</label>
      <input id="date" type="date" value={date} onChange={handleDateChange} />

      <label htmlFor="time">Time</label>
      <input id="time" type="time" value={time} onChange={handleTimeChange} />

      <label htmlFor="guests">Number of Guests</label>
      <input
        id="guests"
        type="number"
        value={guests}
        onChange={handleGuestsChange}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={handleOccasionChange}>
        <option value="none">None</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>

      <input type="submit" />
    </form>
  );
}

export default ReservationForm;
