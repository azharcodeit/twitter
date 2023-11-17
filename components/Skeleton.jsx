export default function Skeleton({ className }) {
  return <div className={`bg-darker-gray-bg motion-safe:animate-pulse rounded ${className}`} />;
}