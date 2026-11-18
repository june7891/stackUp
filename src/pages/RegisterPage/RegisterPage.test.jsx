
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import RegisterPage from "./RegisterPage";

// Fonctions simulées
const { mockRegister, mockNavigate } = vi.hoisted(() => ({
  mockRegister: vi.fn(),
  mockNavigate: vi.fn(),
}));

// Simuler le hook d'authentification
vi.mock("../../hooks/useAuth", () => ({
  useAuth: () => ({
    register: mockRegister,
  }),
}));

// Simuler la navigation
vi.mock("react-router", async (importOriginal) => {
  const actual = await importOriginal();

  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("Tests du formulaire d'inscription", () => {

  beforeEach(() => {
    vi.clearAllMocks();
    mockRegister.mockResolvedValue(true);
  });

  // Fonction réutilisable pour remplir le formulaire
  async function remplirFormulaire(
    user,
    password = "Password12345!",
    confirmation = password
  ) {
    await user.type(
      screen.getByLabelText("Nom d'utilisateur"),
      "toma"
    );

    await user.type(
      screen.getByLabelText("Adresse email"),
      "toma@test.com"
    );

    await user.type(
      screen.getByLabelText("Mot de passe"),
      password
    );

    await user.type(
      screen.getByLabelText("Confirmer le mot de passe"),
      confirmation
    );
  }

  function afficherFormulaire() {
    render(
      <MemoryRouter>
        <RegisterPage />
      </MemoryRouter>
    );
  }


  // Test 1 inscription invalide (mots de passes sont différents)
 
 it("affiche une erreur si les mots de passe sont différents", async () => {
  const user = userEvent.setup();
  afficherFormulaire();

  await remplirFormulaire(
    user,
    "Password12345!",
    "Password67890!"
  );

  await user.click(
    screen.getByRole("button", {
      name: "Créer mon compte"
    })
  );

  expect(
    screen.getByRole("alert")
  ).toHaveTextContent(
    "Les mots de passe ne correspondent pas."
  );
});


  // Test 1 inscription valide

// it("permet de s'inscrire avec des données valides", async () => {
//   const user = userEvent.setup();
//   afficherFormulaire();

//   await remplirFormulaire(user);

//   await user.click(
//     screen.getByRole("button", {
//       name: "Créer mon compte"
//     })
//   );

//   await vi.waitFor(() => {
//     expect(mockNavigate).toHaveBeenCalledWith("/login");
//   });
// });

});
