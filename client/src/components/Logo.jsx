export default function Logo({ light = false, size = 'md' }) {
  const textSize = size === 'sm' ? 'text-lg' : 'text-xl';
  return (
    <div className="flex items-center gap-2.5">
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8 L30 8 L20 20 L30 32 L4 32 Z" fill={light ? '#FFFFFF' : '#0B2A6F'} />
        <path d="M14 8 L36 8 L26 20 L36 32 L14 32 Z" fill="#FF6B00" opacity="0.92" />
      </svg>
      <div className="leading-tight">
        <p className={`${textSize} font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy'}`}>SwiftShip</p>
        <p className={`text-[10px] font-medium tracking-wide ${light ? 'text-white/70' : 'text-text-muted'}`}>Delivering a Smarter Tomorrow</p>
      </div>
    </div>
  );
}
