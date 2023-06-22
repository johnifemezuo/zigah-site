import React from "react";
import Container from "../../../layout/Container";
import PadlockIcon from "../../Global/Icons/svg/PadlockIcon";
import Button from "../../Global/UI/Button/Button";
import EmployeeCard from "./EmployeeCard";

function MeatTheTeam({ teamMembers }: any) {
  if (!teamMembers) {
    return <p>Loadding...</p>;
  }

  return (
    <div className="bg-primary-blue text-center py-20 lg:py-36">
      <Container>
        <div className="px-6">
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl lg:text-4xl font-semibold text-white capilize">
              Meet The Team
            </h1>
            <p className="lg:text-lg text-white/70 ">
              Introducing you to our Product Team
            </p>

            <Button
              isLoading={false}
              className="btn inline-flex space-x-3 items-center uppercase btn-white"
            >
              <span className="mb-1">
                <PadlockIcon />
              </span>
              <span className="text-xs lg:text-base">Contact The Team</span>
            </Button>
          </div>

          <div className="aboutTeams mt-12 lg:flex gap-4 lg:gap-8 grid  grid-cols-2 lg:mt-20">
            {teamMembers.map((team: any, i: number) => (
              <EmployeeCard
                key={i}
                img={team?.image.url}
                name={team?.name}
                link={team?.link}
                role="Product Designer"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MeatTheTeam;
