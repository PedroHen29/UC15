import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import {
  CircleMarker,
  MapContainer,
  Popup,
  TileLayer,
  useMap,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function CentralizarMapa({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const mapa = useMap();

  useEffect(() => {
    mapa.setView([latitude, longitude], mapa.getZoom());
  }, [mapa, latitude, longitude]);

  return null;
}

export const MapaTempoReal = () => {
  const [posicao, setPosicao] =
    useState<Location.LocationObject | null>(null);
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    let inscricao: Location.LocationSubscription | null = null;

    const iniciarLocalizacao = async () => {
      try {
        const { status } =
          await Location.requestForegroundPermissionsAsync();

        if (!ativo) return;

        if (status !== 'granted') {
          setErro('Permissão de localização negada.');
          setCarregando(false);
          return;
        }

        const novaInscricao = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            distanceInterval: 5,
            timeInterval: 2000,
          },
          (novaPosicao) => {
            if (!ativo) return;
            setPosicao(novaPosicao);
            setErro('');
            setCarregando(false);
          },
          (motivo) => {
            if (!ativo) return;
            setErro(motivo);
            setCarregando(false);
          },
        );

        if (ativo) {
          inscricao = novaInscricao;
        } else {
          novaInscricao.remove();
        }
      } catch (error) {
        console.error('Falha ao acompanhar localização:', error);
        if (ativo) {
          setErro('Não foi possível obter a localização.');
          setCarregando(false);
        }
      }
    };

    iniciarLocalizacao();

    return () => {
      ativo = false;
      inscricao?.remove();
    };
  }, []);

  if (carregando) {
    return (
      <View style={styles.centro}>
        <ActivityIndicator size="large" />
        <Text>Buscando sua localização...</Text>
      </View>
    );
  }

  if (erro || !posicao) {
    return (
      <View style={styles.centro}>
        <Text>{erro || 'Localização indisponível.'}</Text>
      </View>
    );
  }

  const { latitude, longitude } = posicao.coords;

  return (
    <View style={styles.container}>
      <MapContainer
        center={[latitude, longitude]}
        zoom={16}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <CentralizarMapa latitude={latitude} longitude={longitude} />
        <CircleMarker
          center={[latitude, longitude]}
          radius={9}
          pathOptions={{
            color: '#fff',
            fillColor: '#1683ff',
            fillOpacity: 1,
            weight: 3,
          }}
        >
          <Popup>Minha localização em tempo real</Popup>
        </CircleMarker>
      </MapContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, minHeight: 300 },
  centro: {
    flex: 1,
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 20,
  },
});