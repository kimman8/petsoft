import ContentBlock from '@/components/content-block';
import H1 from '@/components/h1';

export default function Page() {
  return (
    <main>
      <H1 className="my-8 text-white">Your Account</H1>
      <ContentBlock className="h-[500px] flex items-center justify-center">
        <p>Logged in as...</p>
      </ContentBlock>
    </main>
  );
}
