const API_URL = "http://localhost:3000/offres";

export async function getOffres() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des offres");
  }

  return await response.json();
}

export async function addOffre(offre) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(offre),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de l'ajout");
  }
  return await response.json();
}

export async function getOffreById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error("Offre introuvable");
  }
  return await response.json();
}

export async function deleteOffre(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erreur de suppression");
  }
}

export async function updateAvailability(id, newStatus) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ available: !newStatus }),
  });

  if (!response.ok) {
    throw new Error("Erreur lors de la mise à jour");
  }
  return await response.json();
}
