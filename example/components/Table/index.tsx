import styles from './Table.module.css';

export function OptionTable({
  options,
}: {
  options: [string, string, any, string, string];
}) {
  return (
    <div
      className={
        '-mx-6 mt-6 mb-4 overflow-x-auto overscroll-x-contain px-6 pb-4 ' +
        styles.container
      }
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b py-4 text-left dark:border-dark-border">
            <th className="py-2 font-semibold">Name</th>
            <th className="py-2 pl-6 font-semibold">Type</th>
            <th className="py-2 pr-6 pl-8 font-semibold">Description</th>
            <th className="py-2 px-6 font-semibold">Example</th>
            <th className="py-2 px-6 font-semibold">Default</th>
          </tr>
        </thead>
        <tbody className="align-baseline text-gray-900 dark:text-gray-100">
          {options.map(([option, type, description, example, defaultVal]) => (
            <tr
              key={option}
              className="border-b border-gray-100 dark:border-dark-border"
            >
              <td className="whitespace-pre py-2 font-mono text-xs font-semibold leading-6 text-violet-600 dark:text-violet-500">
                {option}
              </td>
              <td className="py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {type}
              </td>
              <td className="py-2 pl-8 dark:text-gray-200">{description}</td>
              <td className="py-2 pl-6 py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {example}
              </td>
              <td className="py-2 pl-6 py-2 pl-6 font-mono text-xs font-semibold leading-6 text-slate-500 dark:text-slate-400">
                {defaultVal}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
