import Link from "next/link";
import PrivacyPolicies from "@/components/disclosure/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <section className="font-poppins">
      <div className="md:max-w-5xl bg-gray-300 mx-auto p-4">
        <h3 className="text-center text-2xl font-semibold">Privacy Policy</h3>
        <span className="text-base">Effective Date: 01-01-2021</span>
        <div>
          <PrivacyPolicies />
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
