import { useRouter } from "next/router";

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Página para: {slug}</div>;
}
