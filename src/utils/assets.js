/**
 * Explicit Deterministic Asset Map Resolver
 */
import profileImg from '../assets/profile.jpg';
import ktsImg from '../assets/experiences/Event Executive Chairman of KTS 2022.jpg';
import hmtiImg from '../assets/experiences/Ketua Umum HMTI.jpg';
import ncsImg from '../assets/experiences/PBL Semester 3.jpg';
import speechImg from '../assets/awards/Awarding Juara 2 Internal Competition Speech 2026.jpg';
import smartCityImg from '../assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg';

const ASSET_MAP = {
  '/src/assets/profile.jpg': profileImg,
  'src/assets/profile.jpg': profileImg,
  '/src/assets/experiences/Ketua Umum HMTI.jpg': hmtiImg,
  'src/assets/experiences/Ketua Umum HMTI.jpg': hmtiImg,
  '/src/assets/experiences/Event Executive Chairman of KTS 2022.jpg': ktsImg,
  'src/assets/experiences/Event Executive Chairman of KTS 2022.jpg': ktsImg,
  '/src/assets/experiences/PBL Semester 3.jpg': ncsImg,
  'src/assets/experiences/PBL Semester 3.jpg': ncsImg,
  '/src/assets/awards/Awarding Juara 2 Internal Competition Speech 2026.jpg': speechImg,
  'src/assets/awards/Awarding Juara 2 Internal Competition Speech 2026.jpg': speechImg,
  '/src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg': smartCityImg,
  'src/assets/awards/Awarding Juara 3 Internal Competition Smart City 2025.jpg': smartCityImg,
};

export function resolveAsset(path) {
  if (!path) return profileImg;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  return ASSET_MAP[path] || profileImg;
}
