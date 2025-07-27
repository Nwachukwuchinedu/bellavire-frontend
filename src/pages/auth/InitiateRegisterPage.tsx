import { Button } from "@/components/ui/button";
import CardHeader from "@/assets/icons/user-individual.svg";
import CardHeader2 from "@/assets/icons/user-organization.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import { useAuthStore, UserRole } from "@/stores/authStore";

export const InitiateRegisterPage = () => {
  const { user } = useAuthStore();
  const [selectedTypeId, setSelectedTypeId] = useState<string | null>(null);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(
    null
  );
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  const handleNavigateSteps = () => {
    setStep((prev) => prev + 1);
    step === 2 && handleNavigateToRegister();
  };
  const handleNavigateToRegister = () => {
    if (!selectedTypeId) return;
    const type = Number(selectedTypeId) === 1 ? "individual" : "organization";
    //   navigate(`/register/customers/add-single-customer?type=${type}`);
    navigate(`/register?type=${type}`);
  };

const AccountType: { id: string; name: UserRole; headerIcon: string; description: string }[] = [
  {
    id: "1",
    name: "tenant",
    headerIcon: CardHeader,
    description: "I'm looking to rent a property",
  },
  {
    id: "2",
    name: "landlord",
    headerIcon: CardHeader2,
    description: "I want to list and manage my properties",
  },
  {
    id: "3",
    name: "agent",
    headerIcon: CardHeader2,
    description: "I manage properties on behalf of others.",
  },
];

  const UserType: any[] = [
    {
      id: 1,
      name: "Individual",
      headerIcon: CardHeader,
      description:
        "Independent owners, short-let hosts, or self-managing landlords.",
    },
    {
      id: 2,
      name: "Organization",
      headerIcon: CardHeader2,
      description:
        "Real estate firms, letting agencies, housing associations, and corporate landlords.",
    },
  ];

  return (
    <section className="h-screen w-full justify-center items-center flex">
      <div className={`flex flex-col items-center mx-8 md:mx-12 lg:mx-auto justify-center gap-12 lg:max-w-[868px] xl:max-w-[1076px] ${step === 1 ? "pt-36 md:pt-44" : "pt-10 md:26"}`}>
        <img
          src={Logo}
          alt=""
          className="w-36 md:w-52 lg:w-64 
             absolute top-10 md:top-12 
             left-1/2 md:left-32 
             transform -translate-x-1/2 md:translate-x-0"
        />
        <h2 className="font-semibold md:font-normal text-[20px] md:text-[24px] lg:text-[48px] leading-[30px] text-[#1E1E1E] text-center">
          {step === 1
            ? "Select Your Account Type"
            : "How would you like to register?"}
        </h2>

        {step === 1 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 lg:gap-12">
              {AccountType.map((account) => (
                <div
                  key={account.id}
                  onClick={() => setSelectedAccountId(account.id)}
                  className={` group w-full max-w-none lg:max-w-[250px] col-span-1 h-full flex flex-col gap-2 py-6 px-4 shadow-sm hover:shadow-sm border ${
                    selectedAccountId === account.id
                      ? "border-[#5A86FF] shadow-[#5A86FF]"
                      : "border-[#1E1E1E] hover:shadow-[#1E1E1E]"
                  } hover:ring-[#1E1E1E] rounded-lg tap-effect transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src={account.headerIcon}
                        alt=""
                        className="w-6 lg:w-8 h-6 lg:h-8"
                      />
                      <h4 className="text-[18px] lg:text-[26px] font-medium leading-[100%] text-[#1E1E1E]">
                        {account.name.charAt(0).toUpperCase() + account.name.slice(1)}
                      </h4>
                    </div>
                    <div>
                      {/* < Circle Toogle /> */}
                      <div
                        className={` flex items-center w-5 h-5 justify-center rounded-full ${
                          selectedAccountId === account.id
                            ? "bg-[#5A86FF]"
                            : "bg-white border border-[#1E1E1E]"
                        }`}
                      >
                        {selectedAccountId === account.id && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-2 lg:mt-5">
                    <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[16px] text-[#1E1E1E] flex items-center gap-2">
                      {account.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 lg:gap-12">
              {UserType.map((user) => (
                <div
                  key={user.id}
                  onClick={() => setSelectedTypeId(user.id)}
                  className={` group w-full col-span-1 h-full flex flex-col gap-2 py-6 px-4 shadow-sm hover:shadow-sm border ${
                    selectedTypeId === user.id
                      ? "border-[#5A86FF] shadow-[#5A86FF]"
                      : "border-[#1E1E1E] hover:shadow-[#1E1E1E]"
                  } hover:ring-[#1E1E1E] rounded-lg tap-effect transition-all duration-300 cursor-pointer`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <img
                        src={user.headerIcon}
                        alt=""
                        className="w-6 lg:w-8 h-6 lg:h-8"
                      />
                      <h4 className="text-[18px] lg:text-[26px] font-medium leading-[100%] text-[#1E1E1E]">
                        {user.name}
                      </h4>
                    </div>
                    <div>
                      {/* < Circle Toogle /> */}
                      <div
                        className={` flex items-center w-5 h-5 justify-center rounded-full ${
                          selectedTypeId === user.id
                            ? "bg-[#5A86FF]"
                            : "bg-white border border-[#1E1E1E]"
                        }`}
                      >
                        {selectedTypeId === user.id && (
                          <div className="w-3 h-3 bg-white rounded-full" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5 mt-2 lg:mt-5">
                    <p className="text-[14px] md:text-[16px] font-normal leading-[20px] md:leading-[16px] text-[#1E1E1E] flex items-center gap-2">
                      {user.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="block">
          <div className="flex flex-1 w-full justify-center md:mt-6">
            <Button
              onClick={handleNavigateSteps}
              className="text-[20px] font-medium leading-[100%] py-1.5 px-3 w-full md:w-[286px] h-[51px]"
              type="button"
              disabled={
                (step === 1 && !selectedAccountId) ||
                (step === 2 && !selectedTypeId)
              }
            >
              {step === 1 && "Get Started"} {step === 2 && "Continue"}{" "}
            </Button>
          </div>
          {step === 1 && (
            <p className="my-3 text-[14px] text-center font-medium">
              <span className="text-[#1C1C1CCC]">
                Already have an account?{" "}
              </span>
              <span className="text-[#5a86ff]">
                <Link to={"/login"}>Sign In</Link>
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
