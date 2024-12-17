import CareerSection from "@/components/domain/home/sections/Career";
import ProfileSection from "@/components/domain/home/sections/Profile";
import SkillSection from "@/components/domain/home/sections/Skill";
import { Box, Button, Divider } from "@mantine/core";
import Link from "next/link";

const Main = () => {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll">
      <ProfileSection />
      <CareerSection />
      <SkillSection />
    </div>
  );
};

export default Main;
