import { motion } from "framer-motion";
import { WrenchIcon } from "lucide-react";

export default function AboutLayout() {
  return (
    <>
      <motion.div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-[50px] bg-gradient-to-br from-primary to-indigo-500 dark:from-pink-700"></div>
          <div className="blur-[106px] h-[50px] bg-gradient-to-r from-pink-400 to-indigo-800 dark:to-pink-600"></div>
        </div>
      </motion.div>
      <div className="lg:flex lg:flex-row lg:justify-evenly lg:items-center flex flex-col-reverse">
        <div>
          <div>
            <div className="lg:justify-none lg:items-none lg:block justify-center items-center flex lg:mt-0 mt-12">
              <h1 className="flex text-4xl items-center gap-[10px]">
                Rules <WrenchIcon />
              </h1>
            </div>
            <div className="lg:w-auto w-1/1 mx-8">
              <div className="mt-3">
                <h1 className="text-2xl">Buat Diskusi yang Relevan</h1>
                <ul className="mx-4 list-disc">
                  <li>
                    Hindari spam, baik itu promosi diri, produk, atau layanan.
                  </li>
                  <li>
                    Pastikan setiap postingan atau komentar memiliki nilai
                    tambah.
                  </li>
                </ul>
              </div>

              <ul className="mx-4 list-disc">
                <h1 className="text-2xl">Berpartisipasi Aktif</h1>
                <div className="mx-4">
                  <li>Berpartisipasi dalam diskusi dan kegiatan komunitas.</li>
                  <li>Bagikan pengetahuan dan pengalaman Anda.</li>
                </div>
              </ul>

              <div className="mx-4 list-disc">
                <h1 className="text-2xl">Moderator dan Administrasi</h1>
                <div className="mx-4">
                  <li>Ikuti arahan moderator dan admin komunitas.</li>
                  <li>
                    Laporkan perilaku yang melanggar aturan kepada moderator
                    atau admin.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative justify-center flex items-center">
          <div className="bg-indigo-400 rounded-lg overflow-hidden rotate-45 lg:w-[350px] lg:h-[350px] w-[200px] h-[200px]">
            <img
              src="/anime.png"
              alt=""
              className="lg:w-[450px] lg:h-[450px] w-[250px] h-[250px] object-cover transform -rotate-45"
            />
          </div>
        </div>
      </div>
    </>
  );
}
