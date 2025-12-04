import { Question as QuestionType } from '../data/questions';

type QuestionProps = {
  question: QuestionType;
  selectedValue?: string;
  onSelect: (value: string) => void;
};

export default function Question({
  question,
  selectedValue,
  onSelect,
}: QuestionProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-4">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 p-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 cursor-pointer transition-all group"
          >
            <input
              type="radio"
              name={question.id}
              value={option}
              checked={selectedValue === option}
              onChange={(e) => onSelect(e.target.value)}
              className="w-5 h-5 text-blue-600 focus:ring-2 focus:ring-blue-500"
            />
            <span className="text-slate-700 group-hover:text-slate-900 font-medium">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
