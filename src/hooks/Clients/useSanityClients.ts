import { useState, useEffect } from "react";
import type { Client } from "../../types/client-data";
import { sanityClientService } from "../../services/ClientService/sanityClientService";

export const useSanityClients = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setLoading(true);
        const data = await sanityClientService.getClients();
        setClients(data);
      } catch (err) {
        setError("Failed to fetch clients");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  return { clients, loading, error };
};

export const useSanityFeaturedClients = (limit: number = 9) => {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedClients = async () => {
      try {
        setLoading(true);
        const data = await sanityClientService.getFeaturedClients(limit);
        setClients(data);
      } catch (err) {
        setError("Failed to fetch featured clients");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedClients();
  }, [limit]);

  return { clients, loading, error };
};

export const useSanityClientById = (clientId: string) => {
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchClientById = async () => {
      try {
        setLoading(true);
        const data = await sanityClientService.getClientById(clientId);
        setClient(data);
      } catch (err) {
        setError("Failed to fetch client");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (clientId) {
      fetchClientById();
    }
  }, [clientId]);

  return { client, loading, error };
};
