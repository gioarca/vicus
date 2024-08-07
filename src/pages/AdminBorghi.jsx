import React, { useState, useEffect } from "react";
import BorgoForm from "./BorgoForm";
import Loader from "../components/Loader";

function AdminBorghi() {
  const [borghi, setBorghi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentBorgo, setCurrentBorgo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchBorghi = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://borghi-backend.onrender.com/api/v1/borghi"
        );
        const data = await response.json();
        setBorghi(data.borghi);
      } catch (error) {
        console.error("Errore durante il fetching dei borghi:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBorghi();
  }, []);

  const handleAddBorgo = async (newBorgo) => {
    try {
      const response = await fetch(
        "https://borghi-backend.onrender.com/api/v1/borghi",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newBorgo),
        }
      );
      const savedBorgo = await response.json();
      setBorghi([...borghi, savedBorgo]);
    } catch (error) {
      console.error("Errore durante l'aggiunta del borgo:", error);
    }
  };

  const handleUpdateBorgo = async (updatedBorgo) => {
    try {
      const response = await fetch(
        `https://borghi-backend.onrender.com/api/v1/borghi/${currentBorgo._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedBorgo),
        }
      );
      const savedBorgo = await response.json();
      setBorghi(
        borghi.map((borgo) =>
          borgo._id === savedBorgo._id ? savedBorgo : borgo
        )
      );
      setIsEditing(false);
      setCurrentBorgo(null);
    } catch (error) {
      console.error("Errore durante la modifica del borgo:", error);
    }
  };

  const handleDeleteBorgo = async (borgoId) => {
    try {
      await fetch(
        `https://borghi-backend.onrender.com/api/v1/borghi/${borgoId}`,
        {
          method: "DELETE",
        }
      );
      setBorghi(borghi.filter((borgo) => borgo._id !== borgoId));
    } catch (error) {
      console.error("Errore durante la cancellazione del borgo:", error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Gestione Borghi</h1>
      {isEditing ? (
        <BorgoForm
          borgo={currentBorgo}
          onSave={handleUpdateBorgo}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <BorgoForm
          onSave={handleAddBorgo}
          onCancel={() => setCurrentBorgo(null)}
        />
      )}
      <ul>
        {borghi.map((borgo) => (
          <li key={borgo._id}>
            <h2>{borgo.name}</h2>
            <button
              onClick={() => {
                setCurrentBorgo(borgo);
                setIsEditing(true);
              }}
            >
              Modifica
            </button>
            <button onClick={() => handleDeleteBorgo(borgo._id)}>
              Cancella
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminBorghi;
