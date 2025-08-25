import ReservationForm from "../components/ReservationForm";

function Reservations() {
  return (
    <>
      <Header />
      <Nav />
      <Main>
        <h1>Reserve a Table</h1>
        <ReservationForm />
      </Main>
      <Footer />
    </>
  );
}

export default Reservations;
