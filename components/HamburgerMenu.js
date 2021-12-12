const HamburgerMenu = () => {
  return (
    <>
      <div className="hamburger">
        <div className="burger burger1" />
        <div className="burger burger2" />
        <div className="burger burger3" />
      </div>

      <style jsx>{`
        .hamburger {
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: space-around;
          flex-direction: column;
          flex-wrap: nowrap;
          z-index: 10;
        }

        .burger {
          width: 2rem;
          height: 0.5rem;
          border-radius: 10px;
          background-color: teal;
        }
      `}</style>
    </>
  );
};

export default HamburgerMenu;
