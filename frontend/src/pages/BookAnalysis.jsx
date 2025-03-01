import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router";
import { getCSRFToken } from "../helpers/auth";

export default function BookAnalysis() {
  const { bookId } = useParams();
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startingAnalysis, setStartingAnalysis] = useState(false);

  const fetchAnalysis = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/books/${bookId}/analysis/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.status === 404) {
        setAnalysis(null);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error("Failed to fetch analysis data");
      }

      const data = await response.json();
      setAnalysis(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [bookId]);

  useEffect(() => {
    fetchAnalysis();
  }, [fetchAnalysis]);

  const startAnalysis = async () => {
    setStartingAnalysis(true);
    setError(null);

    try {
      const response = await fetch(`/api/books/${bookId}/analysis/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": getCSRFToken(),
        },
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error("Failed to start analysis");
      }

      await fetchAnalysis();
    } catch (err) {
      setError(err.message);
    } finally {
      setStartingAnalysis(false);
    }
  };

  if (loading) {
    return <p className="text-center mt-10 text-gray-700">Loading book analysis...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">📖 Book Analysis</h2>

      {/* Top Section: Analysis Progress */}
      <div className="p-4 border border-gray-300 rounded-lg bg-gray-100 mb-6">
        {analysis ? (
          <p className="text-center text-green-600 font-bold">
            Analysis completed for {analysis.percent_complete}% of the book.
          </p>
        ) : (
          <div className="text-center">
            <p className="text-gray-700 mb-3">This book has not been analyzed yet.</p>
            <button
              onClick={startAnalysis}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              disabled={startingAnalysis}
            >
              {startingAnalysis ? "Starting Analysis..." : "Start Analysis"}
            </button>
          </div>
        )}
      </div>

      {/* Bottom Section: Character Analysis */}
      {analysis && analysis.characters && Object.keys(analysis.characters).length > 0 ? (
        <div>
          <h3 className="text-xl font-bold mb-4">Character Analysis</h3>
          <ul className="space-y-4">
            {Object.entries(analysis.characters.characters).map(([characterName, details]) => (
              <li key={characterName} className="p-4 border border-gray-300 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-blue-600">{characterName}</h4>
                <div className="mt-2">
                  <h5 className="text-md font-semibold text-green-600">🌟 Strengths:</h5>
                  <ul className="list-disc ml-6 text-gray-700">
                    {details.personality_analysis.strengths.map((strength, index) => (
                      <li key={index}>{strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-2">
                  <h5 className="text-md font-semibold text-red-600">⚠ Weaknesses:</h5>
                  <ul className="list-disc ml-6 text-gray-700">
                    {details.personality_analysis.weaknesses.map((weakness, index) => (
                      <li key={index}>{weakness}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-gray-600">No character analysis available yet.</p>
      )}
    </div>
  );
}
