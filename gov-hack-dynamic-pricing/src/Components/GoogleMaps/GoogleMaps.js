function GoogleMaps() {
  return;
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="maps" element={<GoogleMaps />} />
    </Routes>
  </BrowserRouter>;
}

export default GoogleMaps;
