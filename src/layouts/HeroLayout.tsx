import {
  AcademicCapIcon,
  BoltIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { User } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function HeroLayout() {
  const router = useRouter();
  const JoinHandle = () => {
    router.push('https://wa.com');
  }
  return (
    <>
      <div
      className="relative"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-[800px] bg-gradient-to-br from-primary to-purple-500 dark:from-blue-700"></div>
          <div className="blur-[106px] h-[500px] bg-gradient-to-r from-indigo-400 to-green-800 dark:to-indigo-600"></div>
        </div>
      </div>
      <div className="flex justify-center items-center lg:h-[100vh] h-[130vh]" style={{ zIndex: '1', position: 'relative' }}>
        <div className="lg:w-1/1 text-center">
          <div>
            <div className="lg:w-1/2 mx-[auto]">
            <h1 className="text-5xl font-bold">
              Ngoding Santuy Enjoying Code and Coffee in a Simple Programmer
              Community.
            </h1>
            <div className="mt-2">
              <p className="lg:w-[auto] w-[90%] mx-[5%]">
                Platform belajar pemrograman santai dengan materi mudah
                dipahami, antarmuka ramah, dan proyek praktis. Komunitas online
                untuk berkolaborasi dan bertukar informasi.
              </p>
            </div>
            <div className="flex items-center justify-center gap-[15px]">
              <motion.button onClick={JoinHandle} whileTap={{ scale: 1.1 }} className="mt-5 text-[20px] bg-indigo-300 font-bold px-5 py-1 rounded-md border-black border text-black">
                Join
              </motion.button>
              <motion.button whileTap={{ scale: 1.1 }} className="mt-5 text-[20px] bg-indigo-400 font-bold px-5 py-1 rounded-md border-black border text-black">
                Docs
              </motion.button>
            </div>
            </div>
            <div className="md:block lg:flex justify-center items-center gap-[100px] mt-[10vh]">
              <div className="lg:max-w-md text-start mx-10">
                <div className="space-y-1">
                  <h4 className="text-medium font-medium">Coding Comunity</h4>
                  <p className="text-small text-default-400">
                    Breat community to participate in.
                  </p>
                </div>
                <Divider className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-small">
                  <div>What'sApp</div>
                  <Divider orientation="vertical" />
                  <div>Discord</div>
                  <Divider orientation="vertical" />
                  <div>Github</div>
                </div>
              </div>
              <div className="lg:mt-5  mt-10 flex justify-center items-center gap-[100px]">
                <div>
                  <h1 className="text-2xl">
                    <span className="text-3xl">F</span>ounder
                  </h1>
                  <div className="flex text-start mt-2 gap-[20px] w-[100%]">
                    <User
                      name="Ahmad Rafi"
                      description="Full-Stack Developer"
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/70046808?v=4",
                      }}
                    />
                    <User
                      name="Muhammad Reihan"
                      description="Front End Developer"
                      avatarProps={{
                        src: "https://avatars.githubusercontent.com/u/125675696?v=4",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
