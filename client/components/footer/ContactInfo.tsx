import Link from "next/link";
import { contactLinks } from "routes/footerLinks";
import FooterTitle from "./FooterTitle";

const ContactInfo = () => {
  return (
    <div>
      <FooterTitle title="Reach Us" />
      <div>
        <h4 className="text-xl font-semibold text-neutral-700">
          Safar Travel Express
        </h4>
        <ul>
          {contactLinks.map((contact) => (
            <li
              key={contact.id}
              className="text-neutral-700 font-medium text-sm py-3"
            >
              <Link href={contact.link} className="flex items-center gap-2">
                <span>{contact.icon}</span>
                {contact.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
