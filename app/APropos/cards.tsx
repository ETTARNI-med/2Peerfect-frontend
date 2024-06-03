import React from "react";
import { ShieldCheck } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import { Globe2 } from "lucide-react";

function cards() {
  return (
    <div className="flex flex-row gap-4 ">
      {/* card one  */}
      <article className="rounded-3xl border border-gray-100 bg-Apropo ml-52 p-8  shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded-full bg-blue-900 p-2 ml-32 mt-8  text-white">
          <ShieldCheck />
        </span>

        <h3 className="mt-4  ml-16 text-lg font-medium text-gray-900">
          Formations de qualité
        </h3>

        <p className="mt-2 ml-4 p-8  text-base tracking-wide text-gray-700">
          2peerfect ajustent souvent leurs programmes pour répondre aux besoins
          actuels du marché du travail.
        </p>
      </article>
      {/* card two  */}
      <article className="rounded-3xl border border-gray-100 bg-Apropo  p-8  shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded-full bg-blue-900 p-2 ml-32 mt-8  text-white">
          <CircleUserRound />
        </span>

        <h3 className="mt-4  ml-24 text-lg font-medium text-gray-900">
          Networking
        </h3>

        <p className="mt-2 ml-8 p-8  text-base tracking-wide text-gray-700">
          2peerfect Développer votre visibilité personnelle
          etprofessionnelleavec notre grande communauté .
        </p>
      </article>
      {/* card three  */}
      <article className="rounded-3xl border border-gray-100 bg-Apropo mr-52 p-8  shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded-full bg-blue-900 p-2 ml-32 mt-8  text-white">
          <Globe2 />
        </span>

        <h3 className="mt-4  ml-24 text-lg font-medium text-gray-900">
          Impact social
        </h3>

        <p className="mt-2 ml-8 mr-2 p-8 text-base tracking-wide text-gray-700">
          2peerfect ajustent souvent leurs programmes pour répondre aux besoins
          actuels du marché du travail.
        </p>
      </article>
    </div>
  );
}

export default cards;
