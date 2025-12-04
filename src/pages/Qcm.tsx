import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ChevronRight } from 'lucide-react';
import Question from '../components/Question';
import { questions, QCMAnswers, SportProfile } from '../data/questions';

export default function Qcm() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<QCMAnswers>({});

  useEffect(() => {
    const savedAnswers = localStorage.getItem('decathlon-qcm-answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  const handleAnswerChange = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    localStorage.setItem('decathlon-qcm-answers', JSON.stringify(newAnswers));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.keys(answers).length < questions.length) {
      alert('Veuillez répondre à toutes les questions avant de continuer.');
      return;
    }

    const profile: SportProfile = {
      level: answers.level as SportProfile['level'],
      mainSport: answers.mainSport,
      goal: answers.goal,
      painZone: answers.painZone,
    };

    localStorage.setItem('decathlon-sport-profile', JSON.stringify(profile));
    navigate('/results');
  };

  const progress = (Object.keys(answers).length / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
          Créez votre profil sportif
        </h1>
        <p className="text-slate-600 text-lg">
          Répondez à ces questions pour recevoir des conseils personnalisés
          adaptés à votre niveau et vos besoins.
        </p>
      </div>

      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-slate-600">
            Progression
          </span>
          <span className="text-sm font-medium text-blue-600">
            {Object.keys(answers).length} / {questions.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {questions.map((question) => (
          <Question
            key={question.id}
            question={question}
            selectedValue={answers[question.id]}
            onSelect={(value) => handleAnswerChange(question.id, value)}
          />
        ))}

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
          >
            {Object.keys(answers).length === questions.length ? (
              <>
                <CheckCircle className="w-5 h-5" />
                Voir mes résultats
              </>
            ) : (
              <>
                Continuer
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
