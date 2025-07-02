// SummaryModal.tsx
export const SummaryModal = ({ open, onClose, text }: {
    open: boolean;
    text: string;
    onClose: () => void;
}) => {
    if (!open) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
                <h2 className="mb-4 text-xl font-semibold">Task summary</h2>
                <pre className="mb-6 whitespace-pre-wrap">{text}</pre>
                <button
                    onClick={onClose}
                    className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    Close
                </button>
            </div>
        </div>
    );
};