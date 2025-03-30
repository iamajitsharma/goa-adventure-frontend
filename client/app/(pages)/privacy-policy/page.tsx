import { getPrivacyPolicy } from "sanity/query";
import { PortableText } from "@portabletext/react";
import Container from "components/UI/Container";
import { TypedObject } from "sanity";

interface WebsitePolicyProps {
  title: string;
  wef: string;
  content: TypedObject | TypedObject[];
}

export default async function PrivacyPolicy() {
  const policyData: WebsitePolicyProps = await getPrivacyPolicy();

  const { content, wef, title } = policyData;

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-0 items-center justify-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>
            Effective From <span>{wef}</span>
          </p>
        </div>
        <div className="py-4">
          <PortableText value={content} />
        </div>
      </Container>
    </section>
  );
}
