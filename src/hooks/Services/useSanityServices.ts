import { useState, useEffect } from "react";
import type { Service } from "../../types/service-data";
import { sanityServiceDataService } from "../../services/ServiceDataService/sanityServiceDataService";

export const useSanityServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const data = await sanityServiceDataService.getServices();
        setServices(data);
      } catch (err) {
        setError("Failed to fetch services");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};

export const useSanityServiceById = (serviceId: string) => {
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServiceById = async () => {
      try {
        setLoading(true);
        const data = await sanityServiceDataService.getServiceById(serviceId);
        setService(data);
      } catch (err) {
        setError("Failed to fetch service");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (serviceId) {
      fetchServiceById();
    }
  }, [serviceId]);

  return { service, loading, error };
};

export const useSanityFeaturedServices = (limit: number = 6) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedServices = async () => {
      try {
        setLoading(true);
        const data = await sanityServiceDataService.getFeaturedServices(limit);
        setServices(data);
      } catch (err) {
        setError("Failed to fetch featured services");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedServices();
  }, [limit]);

  return { services, loading, error };
};
