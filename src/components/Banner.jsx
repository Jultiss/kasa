function Banner({ bannerImg, bannerTitle, page }) {
  return (
    <div className={`banner ${page}`}>
      <img src={bannerImg} alt={bannerTitle} />
      <h1>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;