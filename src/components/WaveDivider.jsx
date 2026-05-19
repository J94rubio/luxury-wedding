export default function WaveDivider({
  flip = false,
  bg = "#F8F6F2"
}) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${
        flip ? "rotate-180" : ""
      }`}
    >
      <svg
        viewBox="0 0 1440 120"
        className="relative block w-full h-[120px]"
        preserveAspectRatio="none"
      >
        <path
          fill={bg}
          d="M0,64L80,58.7C160,53,320,43,480,53.3C640,64,800,96,960,96C1120,96,1280,64,1360,48L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
        />
      </svg>
    </div>
  );
}