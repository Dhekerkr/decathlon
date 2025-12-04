import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle, Target, Shield, TrendingUp } from 'lucide-react';

export default function DecathlonChallenge() {
  const navigate = useNavigate();
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    const profile = localStorage.getItem('decathlon-sport-profile');
    setHasProfile(!!profile);
  }, []);

  return (
    <div className="space-y-12">
      <section className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
          <Target className="w-4 h-4" />
          Challenge Decathlon Digital
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
          Devenez le{' '}
          <span className="text-blue-600 relative">
            CTO
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
            >
              <path
                d="M0,7 Q50,0 100,7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-blue-400"
              />
            </svg>
          </span>
          <br />
          de votre santé posturale
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Utilisez la technologie pour pratiquer vos mouvements sportifs en
          toute sécurité. Créez votre profil personnalisé et recevez des
          instructions adaptées pour éviter les blessures.
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <CheckCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Profilage sportif
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Répondez à un questionnaire personnalisé pour définir votre niveau,
            vos objectifs et vos zones sensibles.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="bg-green-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <Shield className="w-6 h-6 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Instructions adaptées
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Obtenez des conseils personnalisés pour chaque mouvement selon
            votre profil et votre niveau.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
          <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">
            Prévention des blessures
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Apprenez les bonnes postures et techniques pour progresser en toute
            sécurité.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={() => navigate('/qcm')}
          className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
        >
          Commencer mon profil posture
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        {hasProfile && (
          <button
            onClick={() => navigate('/results')}
            className="group bg-white hover:bg-slate-50 text-slate-700 font-semibold px-8 py-4 rounded-xl shadow border border-slate-200 hover:border-slate-300 transition-all flex items-center gap-2"
          >
            Reprendre avec mon profil
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        )}
      </div>

      <section className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Comment ça marche ?
        </h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">
                Répondez au questionnaire
              </h4>
              <p className="text-slate-600 text-sm">
                Quelques questions simples pour comprendre votre pratique
                sportive actuelle.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">
                Consultez vos mouvements
              </h4>
              <p className="text-slate-600 text-sm">
                Découvrez une liste de mouvements fondamentaux avec des
                illustrations.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-1">
                Suivez les instructions personnalisées
              </h4>
              <p className="text-slate-600 text-sm">
                Recevez des conseils adaptés à votre niveau et à vos zones
                sensibles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
