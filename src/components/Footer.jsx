function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="text-center m-5">
      <p>Copyright © {year} Vocabulo</p>
    </div>
  );
}

export default Footer;
