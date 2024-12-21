export type IScheduleArray = Ischedule[];

export interface Ischedule {
  day: number;
  list: List[];
}

export interface List {
  id: number;
  code: string;
  names: Names;
  franchises: Franchise[];
  announce?: string;
  status: Status;
  posters: Posters;
  updated: number;
  last_change: number;
  type: Type;
  genres: string[];
  team: Team;
  season: Season;
  description?: string;
  in_favorites: number;
  blocked: Blocked;
  player: Player;
  torrents: Torrents;
}

export interface Names {
  ru: string;
  en: string;
  alternative?: string;
}

export interface Franchise {
  franchise: Franchise2;
  releases: Release[];
}

export interface Franchise2 {
  id: string;
  name: string;
}

export interface Release {
  id: number;
  code: string;
  ordinal: number;
  names: Names2;
}

export interface Names2 {
  ru: string;
  en: string;
  alternative?: string;
}

export interface Status {
  string: string;
  code: number;
}

export interface Posters {
  small: Small;
  medium: Medium;
  original: Original;
}

export interface Small {
  url: string;
  raw_base64_file: any;
}

export interface Medium {
  url: string;
  raw_base64_file: any;
}

export interface Original {
  url: string;
  raw_base64_file: any;
}

export interface Type {
  full_string: string;
  code: number;
  string: string;
  episodes?: number;
  length?: number;
}

export interface Team {
  voice: string[];
  translator: string[];
  editing: string[];
  decor: string[];
  timing: string[];
}

export interface Season {
  string: string;
  code: number;
  year: number;
  week_day: number;
}

export interface Blocked {
  copyrights: boolean;
  geoip: boolean;
  geoip_list: any[];
}

export interface Player {
  alternative_player?: string;
  host: string;
  is_rutube: boolean;
  episodes: Episodes;
  list: EpisodeInfo[];
  rutube: Rutube;
}

export interface Episodes {
  first: number;
  last: number;
  string: string;
}

export interface EpisodeInfo {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips;
  hls: Hls;
}

export interface Skips {
  opening: number[];
  ending: any[];
}

export interface Hls {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N2 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips2;
  hls: Hls2;
}

export interface Skips2 {
  opening: number[];
  ending: any[];
}

export interface Hls2 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N3 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips3;
  hls: Hls3;
}

export interface Skips3 {
  opening: number[];
  ending: any[];
}

export interface Hls3 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N4 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips4;
  hls: Hls4;
}

export interface Skips4 {
  opening: number[];
  ending: any[];
}

export interface Hls4 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N5 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips5;
  hls: Hls5;
}

export interface Skips5 {
  opening: number[];
  ending: any[];
}

export interface Hls5 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N6 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips6;
  hls: Hls6;
}

export interface Skips6 {
  opening: number[];
  ending: any[];
}

export interface Hls6 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N7 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips7;
  hls: Hls7;
}

export interface Skips7 {
  opening: number[];
  ending: any[];
}

export interface Hls7 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N8 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips8;
  hls: Hls8;
}

export interface Skips8 {
  opening: number[];
  ending: any[];
}

export interface Hls8 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N9 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips9;
  hls: Hls9;
}

export interface Skips9 {
  opening: number[];
  ending: any[];
}

export interface Hls9 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N10 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips10;
  hls: Hls10;
}

export interface Skips10 {
  opening: number[];
  ending: any[];
}

export interface Hls10 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N11 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips11;
  hls: Hls11;
}

export interface Skips11 {
  opening: number[];
  ending: any[];
}

export interface Hls11 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N12 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips12;
  hls: Hls12;
}

export interface Skips12 {
  opening: number[];
  ending: any[];
}

export interface Hls12 {
  fhd?: string;
  hd: string;
  sd: string;
}

export interface N13 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips13;
  hls: Hls13;
}

export interface Skips13 {
  opening: number[];
  ending: any[];
}

export interface Hls13 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N14 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips14;
  hls: Hls14;
}

export interface Skips14 {
  opening: number[];
  ending: any[];
}

export interface Hls14 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N15 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips15;
  hls: Hls15;
}

export interface Skips15 {
  opening: number[];
  ending: any[];
}

export interface Hls15 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N16 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips16;
  hls: Hls16;
}

export interface Skips16 {
  opening: number[];
  ending: any[];
}

export interface Hls16 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N17 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips17;
  hls: Hls17;
}

export interface Skips17 {
  opening: number[];
  ending: any[];
}

export interface Hls17 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N18 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips18;
  hls: Hls18;
}

export interface Skips18 {
  opening: number[];
  ending: any[];
}

export interface Hls18 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N19 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips19;
  hls: Hls19;
}

export interface Skips19 {
  opening: number[];
  ending: any[];
}

export interface Hls19 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N20 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips20;
  hls: Hls20;
}

export interface Skips20 {
  opening: number[];
  ending: any[];
}

export interface Hls20 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N21 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips21;
  hls: Hls21;
}

export interface Skips21 {
  opening: number[];
  ending: any[];
}

export interface Hls21 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N22 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips22;
  hls: Hls22;
}

export interface Skips22 {
  opening: number[];
  ending: any[];
}

export interface Hls22 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N23 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips23;
  hls: Hls23;
}

export interface Skips23 {
  opening: number[];
  ending: any[];
}

export interface Hls23 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N24 {
  episode: number;
  name?: string;
  uuid: string;
  created_timestamp: number;
  preview?: string;
  skips: Skips24;
  hls: Hls24;
}

export interface Skips24 {
  opening: number[];
  ending: any[];
}

export interface Hls24 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N25 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips25;
  hls: Hls25;
}

export interface Skips25 {
  opening: number[];
  ending: any[];
}

export interface Hls25 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N26 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips26;
  hls: Hls26;
}

export interface Skips26 {
  opening: number[];
  ending: any[];
}

export interface Hls26 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N27 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips27;
  hls: Hls27;
}

export interface Skips27 {
  opening: number[];
  ending: any[];
}

export interface Hls27 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N28 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips28;
  hls: Hls28;
}

export interface Skips28 {
  opening: number[];
  ending: any[];
}

export interface Hls28 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N29 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips29;
  hls: Hls29;
}

export interface Skips29 {
  opening: number[];
  ending: any[];
}

export interface Hls29 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N30 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips30;
  hls: Hls30;
}

export interface Skips30 {
  opening: number[];
  ending: any[];
}

export interface Hls30 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N31 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips31;
  hls: Hls31;
}

export interface Skips31 {
  opening: number[];
  ending: any[];
}

export interface Hls31 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N32 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips32;
  hls: Hls32;
}

export interface Skips32 {
  opening: number[];
  ending: any[];
}

export interface Hls32 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N33 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips33;
  hls: Hls33;
}

export interface Skips33 {
  opening: number[];
  ending: any[];
}

export interface Hls33 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N34 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips34;
  hls: Hls34;
}

export interface Skips34 {
  opening: number[];
  ending: any[];
}

export interface Hls34 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N35 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips35;
  hls: Hls35;
}

export interface Skips35 {
  opening: number[];
  ending: any[];
}

export interface Hls35 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N36 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips36;
  hls: Hls36;
}

export interface Skips36 {
  opening: number[];
  ending: any[];
}

export interface Hls36 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N37 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips37;
  hls: Hls37;
}

export interface Skips37 {
  opening: number[];
  ending: any[];
}

export interface Hls37 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N38 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips38;
  hls: Hls38;
}

export interface Skips38 {
  opening: number[];
  ending: any[];
}

export interface Hls38 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N39 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips39;
  hls: Hls39;
}

export interface Skips39 {
  opening: number[];
  ending: any[];
}

export interface Hls39 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N40 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips40;
  hls: Hls40;
}

export interface Skips40 {
  opening: number[];
  ending: any[];
}

export interface Hls40 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N41 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips41;
  hls: Hls41;
}

export interface Skips41 {
  opening: number[];
  ending: any[];
}

export interface Hls41 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N42 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips42;
  hls: Hls42;
}

export interface Skips42 {
  opening: number[];
  ending: any[];
}

export interface Hls42 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N43 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips43;
  hls: Hls43;
}

export interface Skips43 {
  opening: number[];
  ending: any[];
}

export interface Hls43 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N44 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips44;
  hls: Hls44;
}

export interface Skips44 {
  opening: number[];
  ending: any[];
}

export interface Hls44 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N45 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips45;
  hls: Hls45;
}

export interface Skips45 {
  opening: number[];
  ending: any[];
}

export interface Hls45 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N46 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips46;
  hls: Hls46;
}

export interface Skips46 {
  opening: number[];
  ending: any[];
}

export interface Hls46 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N47 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips47;
  hls: Hls47;
}

export interface Skips47 {
  opening: number[];
  ending: any[];
}

export interface Hls47 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N48 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips48;
  hls: Hls48;
}

export interface Skips48 {
  opening: number[];
  ending: any[];
}

export interface Hls48 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N49 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips49;
  hls: Hls49;
}

export interface Skips49 {
  opening: number[];
  ending: any[];
}

export interface Hls49 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N50 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips50;
  hls: Hls50;
}

export interface Skips50 {
  opening: number[];
  ending: any[];
}

export interface Hls50 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N51 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips51;
  hls: Hls51;
}

export interface Skips51 {
  opening: number[];
  ending: any[];
}

export interface Hls51 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N52 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips52;
  hls: Hls52;
}

export interface Skips52 {
  opening: number[];
  ending: any[];
}

export interface Hls52 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N53 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips53;
  hls: Hls53;
}

export interface Skips53 {
  opening: number[];
  ending: any[];
}

export interface Hls53 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N54 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips54;
  hls: Hls54;
}

export interface Skips54 {
  opening: number[];
  ending: any[];
}

export interface Hls54 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N55 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips55;
  hls: Hls55;
}

export interface Skips55 {
  opening: number[];
  ending: any[];
}

export interface Hls55 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N56 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips56;
  hls: Hls56;
}

export interface Skips56 {
  opening: number[];
  ending: any[];
}

export interface Hls56 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N57 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips57;
  hls: Hls57;
}

export interface Skips57 {
  opening: number[];
  ending: any[];
}

export interface Hls57 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N58 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips58;
  hls: Hls58;
}

export interface Skips58 {
  opening: number[];
  ending: any[];
}

export interface Hls58 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N59 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips59;
  hls: Hls59;
}

export interface Skips59 {
  opening: number[];
  ending: any[];
}

export interface Hls59 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N60 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips60;
  hls: Hls60;
}

export interface Skips60 {
  opening: number[];
  ending: any[];
}

export interface Hls60 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N61 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips61;
  hls: Hls61;
}

export interface Skips61 {
  opening: number[];
  ending: any[];
}

export interface Hls61 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N62 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips62;
  hls: Hls62;
}

export interface Skips62 {
  opening: number[];
  ending: any[];
}

export interface Hls62 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N63 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips63;
  hls: Hls63;
}

export interface Skips63 {
  opening: number[];
  ending: any[];
}

export interface Hls63 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N64 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips64;
  hls: Hls64;
}

export interface Skips64 {
  opening: number[];
  ending: any[];
}

export interface Hls64 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N65 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips65;
  hls: Hls65;
}

export interface Skips65 {
  opening: number[];
  ending: any[];
}

export interface Hls65 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N66 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips66;
  hls: Hls66;
}

export interface Skips66 {
  opening: number[];
  ending: any[];
}

export interface Hls66 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N67 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips67;
  hls: Hls67;
}

export interface Skips67 {
  opening: number[];
  ending: any[];
}

export interface Hls67 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N68 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips68;
  hls: Hls68;
}

export interface Skips68 {
  opening: number[];
  ending: any[];
}

export interface Hls68 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N69 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips69;
  hls: Hls69;
}

export interface Skips69 {
  opening: number[];
  ending: any[];
}

export interface Hls69 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N70 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips70;
  hls: Hls70;
}

export interface Skips70 {
  opening: number[];
  ending: any[];
}

export interface Hls70 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N71 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips71;
  hls: Hls71;
}

export interface Skips71 {
  opening: number[];
  ending: any[];
}

export interface Hls71 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N72 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips72;
  hls: Hls72;
}

export interface Skips72 {
  opening: number[];
  ending: any[];
}

export interface Hls72 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N73 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips73;
  hls: Hls73;
}

export interface Skips73 {
  opening: number[];
  ending: any[];
}

export interface Hls73 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N74 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips74;
  hls: Hls74;
}

export interface Skips74 {
  opening: number[];
  ending: any[];
}

export interface Hls74 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N75 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips75;
  hls: Hls75;
}

export interface Skips75 {
  opening: number[];
  ending: any[];
}

export interface Hls75 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N76 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips76;
  hls: Hls76;
}

export interface Skips76 {
  opening: number[];
  ending: any[];
}

export interface Hls76 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N77 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips77;
  hls: Hls77;
}

export interface Skips77 {
  opening: number[];
  ending: any[];
}

export interface Hls77 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N78 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips78;
  hls: Hls78;
}

export interface Skips78 {
  opening: number[];
  ending: any[];
}

export interface Hls78 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N79 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips79;
  hls: Hls79;
}

export interface Skips79 {
  opening: number[];
  ending: any[];
}

export interface Hls79 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N80 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips80;
  hls: Hls80;
}

export interface Skips80 {
  opening: number[];
  ending: any[];
}

export interface Hls80 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N81 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips81;
  hls: Hls81;
}

export interface Skips81 {
  opening: number[];
  ending: any[];
}

export interface Hls81 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N82 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips82;
  hls: Hls82;
}

export interface Skips82 {
  opening: number[];
  ending: any[];
}

export interface Hls82 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N83 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips83;
  hls: Hls83;
}

export interface Skips83 {
  opening: number[];
  ending: any[];
}

export interface Hls83 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N84 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips84;
  hls: Hls84;
}

export interface Skips84 {
  opening: number[];
  ending: any[];
}

export interface Hls84 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N85 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips85;
  hls: Hls85;
}

export interface Skips85 {
  opening: number[];
  ending: any[];
}

export interface Hls85 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N86 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips86;
  hls: Hls86;
}

export interface Skips86 {
  opening: number[];
  ending: any[];
}

export interface Hls86 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N87 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips87;
  hls: Hls87;
}

export interface Skips87 {
  opening: number[];
  ending: any[];
}

export interface Hls87 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N88 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips88;
  hls: Hls88;
}

export interface Skips88 {
  opening: number[];
  ending: any[];
}

export interface Hls88 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N89 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips89;
  hls: Hls89;
}

export interface Skips89 {
  opening: number[];
  ending: any[];
}

export interface Hls89 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N90 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips90;
  hls: Hls90;
}

export interface Skips90 {
  opening: number[];
  ending: any[];
}

export interface Hls90 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N91 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips91;
  hls: Hls91;
}

export interface Skips91 {
  opening: number[];
  ending: any[];
}

export interface Hls91 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N92 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips92;
  hls: Hls92;
}

export interface Skips92 {
  opening: number[];
  ending: any[];
}

export interface Hls92 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N93 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips93;
  hls: Hls93;
}

export interface Skips93 {
  opening: number[];
  ending: any[];
}

export interface Hls93 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N94 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips94;
  hls: Hls94;
}

export interface Skips94 {
  opening: number[];
  ending: any[];
}

export interface Hls94 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N95 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips95;
  hls: Hls95;
}

export interface Skips95 {
  opening: number[];
  ending: any[];
}

export interface Hls95 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N96 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips96;
  hls: Hls96;
}

export interface Skips96 {
  opening: number[];
  ending: any[];
}

export interface Hls96 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N97 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips97;
  hls: Hls97;
}

export interface Skips97 {
  opening: number[];
  ending: any[];
}

export interface Hls97 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N98 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips98;
  hls: Hls98;
}

export interface Skips98 {
  opening: number[];
  ending: any[];
}

export interface Hls98 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N99 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips99;
  hls: Hls99;
}

export interface Skips99 {
  opening: number[];
  ending: any[];
}

export interface Hls99 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N100 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips100;
  hls: Hls100;
}

export interface Skips100 {
  opening: number[];
  ending: any[];
}

export interface Hls100 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N101 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips101;
  hls: Hls101;
}

export interface Skips101 {
  opening: number[];
  ending: any[];
}

export interface Hls101 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N102 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips102;
  hls: Hls102;
}

export interface Skips102 {
  opening: number[];
  ending: any[];
}

export interface Hls102 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N103 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips103;
  hls: Hls103;
}

export interface Skips103 {
  opening: number[];
  ending: any[];
}

export interface Hls103 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N104 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips104;
  hls: Hls104;
}

export interface Skips104 {
  opening: number[];
  ending: any[];
}

export interface Hls104 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N105 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips105;
  hls: Hls105;
}

export interface Skips105 {
  opening: number[];
  ending: any[];
}

export interface Hls105 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N106 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips106;
  hls: Hls106;
}

export interface Skips106 {
  opening: number[];
  ending: any[];
}

export interface Hls106 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N107 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips107;
  hls: Hls107;
}

export interface Skips107 {
  opening: number[];
  ending: any[];
}

export interface Hls107 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N108 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips108;
  hls: Hls108;
}

export interface Skips108 {
  opening: number[];
  ending: any[];
}

export interface Hls108 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N109 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips109;
  hls: Hls109;
}

export interface Skips109 {
  opening: number[];
  ending: any[];
}

export interface Hls109 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N110 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips110;
  hls: Hls110;
}

export interface Skips110 {
  opening: number[];
  ending: any[];
}

export interface Hls110 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N111 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips111;
  hls: Hls111;
}

export interface Skips111 {
  opening: number[];
  ending: any[];
}

export interface Hls111 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N112 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips112;
  hls: Hls112;
}

export interface Skips112 {
  opening: number[];
  ending: any[];
}

export interface Hls112 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N113 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips113;
  hls: Hls113;
}

export interface Skips113 {
  opening: number[];
  ending: any[];
}

export interface Hls113 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N114 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips114;
  hls: Hls114;
}

export interface Skips114 {
  opening: number[];
  ending: any[];
}

export interface Hls114 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N115 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips115;
  hls: Hls115;
}

export interface Skips115 {
  opening: number[];
  ending: any[];
}

export interface Hls115 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N116 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips116;
  hls: Hls116;
}

export interface Skips116 {
  opening: number[];
  ending: any[];
}

export interface Hls116 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N117 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips117;
  hls: Hls117;
}

export interface Skips117 {
  opening: number[];
  ending: any[];
}

export interface Hls117 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N118 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips118;
  hls: Hls118;
}

export interface Skips118 {
  opening: number[];
  ending: any[];
}

export interface Hls118 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N119 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips119;
  hls: Hls119;
}

export interface Skips119 {
  opening: number[];
  ending: any[];
}

export interface Hls119 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N120 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips120;
  hls: Hls120;
}

export interface Skips120 {
  opening: number[];
  ending: any[];
}

export interface Hls120 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N121 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips121;
  hls: Hls121;
}

export interface Skips121 {
  opening: number[];
  ending: any[];
}

export interface Hls121 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N122 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips122;
  hls: Hls122;
}

export interface Skips122 {
  opening: number[];
  ending: any[];
}

export interface Hls122 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N123 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips123;
  hls: Hls123;
}

export interface Skips123 {
  opening: number[];
  ending: any[];
}

export interface Hls123 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N124 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips124;
  hls: Hls124;
}

export interface Skips124 {
  opening: number[];
  ending: any[];
}

export interface Hls124 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N125 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips125;
  hls: Hls125;
}

export interface Skips125 {
  opening: number[];
  ending: any[];
}

export interface Hls125 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N126 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips126;
  hls: Hls126;
}

export interface Skips126 {
  opening: number[];
  ending: any[];
}

export interface Hls126 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N127 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips127;
  hls: Hls127;
}

export interface Skips127 {
  opening: number[];
  ending: any[];
}

export interface Hls127 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N128 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips128;
  hls: Hls128;
}

export interface Skips128 {
  opening: number[];
  ending: any[];
}

export interface Hls128 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N129 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips129;
  hls: Hls129;
}

export interface Skips129 {
  opening: number[];
  ending: any[];
}

export interface Hls129 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N130 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips130;
  hls: Hls130;
}

export interface Skips130 {
  opening: number[];
  ending: any[];
}

export interface Hls130 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N131 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips131;
  hls: Hls131;
}

export interface Skips131 {
  opening: number[];
  ending: any[];
}

export interface Hls131 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N132 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips132;
  hls: Hls132;
}

export interface Skips132 {
  opening: number[];
  ending: any[];
}

export interface Hls132 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N133 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips133;
  hls: Hls133;
}

export interface Skips133 {
  opening: number[];
  ending: any[];
}

export interface Hls133 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N134 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips134;
  hls: Hls134;
}

export interface Skips134 {
  opening: number[];
  ending: any[];
}

export interface Hls134 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N135 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips135;
  hls: Hls135;
}

export interface Skips135 {
  opening: number[];
  ending: any[];
}

export interface Hls135 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N136 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips136;
  hls: Hls136;
}

export interface Skips136 {
  opening: number[];
  ending: any[];
}

export interface Hls136 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N137 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips137;
  hls: Hls137;
}

export interface Skips137 {
  opening: number[];
  ending: any[];
}

export interface Hls137 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N138 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips138;
  hls: Hls138;
}

export interface Skips138 {
  opening: number[];
  ending: any[];
}

export interface Hls138 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N139 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips139;
  hls: Hls139;
}

export interface Skips139 {
  opening: number[];
  ending: any[];
}

export interface Hls139 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N140 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips140;
  hls: Hls140;
}

export interface Skips140 {
  opening: number[];
  ending: any[];
}

export interface Hls140 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N141 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips141;
  hls: Hls141;
}

export interface Skips141 {
  opening: number[];
  ending: any[];
}

export interface Hls141 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N142 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips142;
  hls: Hls142;
}

export interface Skips142 {
  opening: number[];
  ending: any[];
}

export interface Hls142 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N143 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips143;
  hls: Hls143;
}

export interface Skips143 {
  opening: number[];
  ending: any[];
}

export interface Hls143 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N144 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips144;
  hls: Hls144;
}

export interface Skips144 {
  opening: number[];
  ending: any[];
}

export interface Hls144 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N145 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips145;
  hls: Hls145;
}

export interface Skips145 {
  opening: number[];
  ending: any[];
}

export interface Hls145 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N146 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips146;
  hls: Hls146;
}

export interface Skips146 {
  opening: number[];
  ending: any[];
}

export interface Hls146 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N147 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips147;
  hls: Hls147;
}

export interface Skips147 {
  opening: number[];
  ending: any[];
}

export interface Hls147 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N148 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips148;
  hls: Hls148;
}

export interface Skips148 {
  opening: number[];
  ending: any[];
}

export interface Hls148 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N149 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips149;
  hls: Hls149;
}

export interface Skips149 {
  opening: number[];
  ending: any[];
}

export interface Hls149 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N150 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips150;
  hls: Hls150;
}

export interface Skips150 {
  opening: number[];
  ending: any[];
}

export interface Hls150 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N151 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips151;
  hls: Hls151;
}

export interface Skips151 {
  opening: number[];
  ending: any[];
}

export interface Hls151 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N152 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips152;
  hls: Hls152;
}

export interface Skips152 {
  opening: number[];
  ending: any[];
}

export interface Hls152 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N153 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips153;
  hls: Hls153;
}

export interface Skips153 {
  opening: number[];
  ending: any[];
}

export interface Hls153 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N154 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips154;
  hls: Hls154;
}

export interface Skips154 {
  opening: number[];
  ending: any[];
}

export interface Hls154 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N155 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips155;
  hls: Hls155;
}

export interface Skips155 {
  opening: number[];
  ending: any[];
}

export interface Hls155 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N156 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips156;
  hls: Hls156;
}

export interface Skips156 {
  opening: number[];
  ending: any[];
}

export interface Hls156 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N157 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips157;
  hls: Hls157;
}

export interface Skips157 {
  opening: number[];
  ending: any[];
}

export interface Hls157 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N158 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips158;
  hls: Hls158;
}

export interface Skips158 {
  opening: number[];
  ending: any[];
}

export interface Hls158 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N159 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips159;
  hls: Hls159;
}

export interface Skips159 {
  opening: number[];
  ending: any[];
}

export interface Hls159 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N160 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips160;
  hls: Hls160;
}

export interface Skips160 {
  opening: number[];
  ending: any[];
}

export interface Hls160 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N161 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips161;
  hls: Hls161;
}

export interface Skips161 {
  opening: number[];
  ending: any[];
}

export interface Hls161 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N162 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips162;
  hls: Hls162;
}

export interface Skips162 {
  opening: number[];
  ending: any[];
}

export interface Hls162 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N163 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips163;
  hls: Hls163;
}

export interface Skips163 {
  opening: number[];
  ending: any[];
}

export interface Hls163 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N164 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips164;
  hls: Hls164;
}

export interface Skips164 {
  opening: number[];
  ending: any[];
}

export interface Hls164 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N165 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips165;
  hls: Hls165;
}

export interface Skips165 {
  opening: number[];
  ending: any[];
}

export interface Hls165 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N166 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips166;
  hls: Hls166;
}

export interface Skips166 {
  opening: number[];
  ending: any[];
}

export interface Hls166 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N167 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips167;
  hls: Hls167;
}

export interface Skips167 {
  opening: number[];
  ending: any[];
}

export interface Hls167 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N168 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips168;
  hls: Hls168;
}

export interface Skips168 {
  opening: number[];
  ending: any[];
}

export interface Hls168 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N169 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips169;
  hls: Hls169;
}

export interface Skips169 {
  opening: number[];
  ending: any[];
}

export interface Hls169 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N170 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips170;
  hls: Hls170;
}

export interface Skips170 {
  opening: number[];
  ending: any[];
}

export interface Hls170 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N171 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips171;
  hls: Hls171;
}

export interface Skips171 {
  opening: number[];
  ending: any[];
}

export interface Hls171 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N172 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips172;
  hls: Hls172;
}

export interface Skips172 {
  opening: number[];
  ending: any[];
}

export interface Hls172 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N173 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips173;
  hls: Hls173;
}

export interface Skips173 {
  opening: number[];
  ending: any[];
}

export interface Hls173 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N174 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips174;
  hls: Hls174;
}

export interface Skips174 {
  opening: number[];
  ending: any[];
}

export interface Hls174 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N175 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips175;
  hls: Hls175;
}

export interface Skips175 {
  opening: number[];
  ending: any[];
}

export interface Hls175 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N176 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips176;
  hls: Hls176;
}

export interface Skips176 {
  opening: number[];
  ending: any[];
}

export interface Hls176 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N177 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips177;
  hls: Hls177;
}

export interface Skips177 {
  opening: number[];
  ending: any[];
}

export interface Hls177 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N178 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips178;
  hls: Hls178;
}

export interface Skips178 {
  opening: number[];
  ending: any[];
}

export interface Hls178 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N179 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips179;
  hls: Hls179;
}

export interface Skips179 {
  opening: number[];
  ending: any[];
}

export interface Hls179 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N180 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips180;
  hls: Hls180;
}

export interface Skips180 {
  opening: number[];
  ending: any[];
}

export interface Hls180 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N181 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips181;
  hls: Hls181;
}

export interface Skips181 {
  opening: number[];
  ending: any[];
}

export interface Hls181 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N182 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips182;
  hls: Hls182;
}

export interface Skips182 {
  opening: number[];
  ending: any[];
}

export interface Hls182 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N183 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips183;
  hls: Hls183;
}

export interface Skips183 {
  opening: number[];
  ending: any[];
}

export interface Hls183 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N184 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips184;
  hls: Hls184;
}

export interface Skips184 {
  opening: number[];
  ending: any[];
}

export interface Hls184 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N185 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips185;
  hls: Hls185;
}

export interface Skips185 {
  opening: number[];
  ending: any[];
}

export interface Hls185 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N186 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips186;
  hls: Hls186;
}

export interface Skips186 {
  opening: number[];
  ending: any[];
}

export interface Hls186 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N187 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips187;
  hls: Hls187;
}

export interface Skips187 {
  opening: number[];
  ending: any[];
}

export interface Hls187 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N188 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips188;
  hls: Hls188;
}

export interface Skips188 {
  opening: number[];
  ending: any[];
}

export interface Hls188 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N189 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips189;
  hls: Hls189;
}

export interface Skips189 {
  opening: number[];
  ending: any[];
}

export interface Hls189 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N190 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips190;
  hls: Hls190;
}

export interface Skips190 {
  opening: number[];
  ending: any[];
}

export interface Hls190 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N191 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips191;
  hls: Hls191;
}

export interface Skips191 {
  opening: number[];
  ending: any[];
}

export interface Hls191 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N192 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips192;
  hls: Hls192;
}

export interface Skips192 {
  opening: number[];
  ending: any[];
}

export interface Hls192 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N193 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips193;
  hls: Hls193;
}

export interface Skips193 {
  opening: number[];
  ending: any[];
}

export interface Hls193 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N194 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips194;
  hls: Hls194;
}

export interface Skips194 {
  opening: number[];
  ending: any[];
}

export interface Hls194 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N195 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips195;
  hls: Hls195;
}

export interface Skips195 {
  opening: number[];
  ending: any[];
}

export interface Hls195 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N196 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips196;
  hls: Hls196;
}

export interface Skips196 {
  opening: number[];
  ending: any[];
}

export interface Hls196 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N197 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips197;
  hls: Hls197;
}

export interface Skips197 {
  opening: number[];
  ending: any[];
}

export interface Hls197 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N198 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips198;
  hls: Hls198;
}

export interface Skips198 {
  opening: number[];
  ending: any[];
}

export interface Hls198 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N199 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips199;
  hls: Hls199;
}

export interface Skips199 {
  opening: number[];
  ending: any[];
}

export interface Hls199 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N200 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips200;
  hls: Hls200;
}

export interface Skips200 {
  opening: number[];
  ending: any[];
}

export interface Hls200 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N201 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips201;
  hls: Hls201;
}

export interface Skips201 {
  opening: number[];
  ending: any[];
}

export interface Hls201 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N202 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips202;
  hls: Hls202;
}

export interface Skips202 {
  opening: number[];
  ending: any[];
}

export interface Hls202 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N203 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips203;
  hls: Hls203;
}

export interface Skips203 {
  opening: number[];
  ending: any[];
}

export interface Hls203 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N204 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips204;
  hls: Hls204;
}

export interface Skips204 {
  opening: number[];
  ending: any[];
}

export interface Hls204 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N205 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips205;
  hls: Hls205;
}

export interface Skips205 {
  opening: number[];
  ending: any[];
}

export interface Hls205 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N206 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips206;
  hls: Hls206;
}

export interface Skips206 {
  opening: number[];
  ending: any[];
}

export interface Hls206 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N207 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips207;
  hls: Hls207;
}

export interface Skips207 {
  opening: number[];
  ending: any[];
}

export interface Hls207 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N208 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips208;
  hls: Hls208;
}

export interface Skips208 {
  opening: number[];
  ending: any[];
}

export interface Hls208 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N209 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips209;
  hls: Hls209;
}

export interface Skips209 {
  opening: number[];
  ending: any[];
}

export interface Hls209 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N210 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips210;
  hls: Hls210;
}

export interface Skips210 {
  opening: number[];
  ending: any[];
}

export interface Hls210 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N211 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: any;
  skips: Skips211;
  hls: Hls211;
}

export interface Skips211 {
  opening: number[];
  ending: any[];
}

export interface Hls211 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N212 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips212;
  hls: Hls212;
}

export interface Skips212 {
  opening: number[];
  ending: any[];
}

export interface Hls212 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N213 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips213;
  hls: Hls213;
}

export interface Skips213 {
  opening: number[];
  ending: any[];
}

export interface Hls213 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N214 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips214;
  hls: Hls214;
}

export interface Skips214 {
  opening: number[];
  ending: any[];
}

export interface Hls214 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N215 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips215;
  hls: Hls215;
}

export interface Skips215 {
  opening: number[];
  ending: any[];
}

export interface Hls215 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N216 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips216;
  hls: Hls216;
}

export interface Skips216 {
  opening: number[];
  ending: any[];
}

export interface Hls216 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N217 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips217;
  hls: Hls217;
}

export interface Skips217 {
  opening: number[];
  ending: any[];
}

export interface Hls217 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N218 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips218;
  hls: Hls218;
}

export interface Skips218 {
  opening: number[];
  ending: any[];
}

export interface Hls218 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N219 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips219;
  hls: Hls219;
}

export interface Skips219 {
  opening: number[];
  ending: any[];
}

export interface Hls219 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N220 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips220;
  hls: Hls220;
}

export interface Skips220 {
  opening: number[];
  ending: any[];
}

export interface Hls220 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N221 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips221;
  hls: Hls221;
}

export interface Skips221 {
  opening: number[];
  ending: any[];
}

export interface Hls221 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N222 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips222;
  hls: Hls222;
}

export interface Skips222 {
  opening: number[];
  ending: any[];
}

export interface Hls222 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N223 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips223;
  hls: Hls223;
}

export interface Skips223 {
  opening: number[];
  ending: any[];
}

export interface Hls223 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N224 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips224;
  hls: Hls224;
}

export interface Skips224 {
  opening: number[];
  ending: any[];
}

export interface Hls224 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N225 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips225;
  hls: Hls225;
}

export interface Skips225 {
  opening: number[];
  ending: any[];
}

export interface Hls225 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N226 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips226;
  hls: Hls226;
}

export interface Skips226 {
  opening: number[];
  ending: any[];
}

export interface Hls226 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N227 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips227;
  hls: Hls227;
}

export interface Skips227 {
  opening: number[];
  ending: any[];
}

export interface Hls227 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N228 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips228;
  hls: Hls228;
}

export interface Skips228 {
  opening: number[];
  ending: any[];
}

export interface Hls228 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N229 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips229;
  hls: Hls229;
}

export interface Skips229 {
  opening: number[];
  ending: any[];
}

export interface Hls229 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N230 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips230;
  hls: Hls230;
}

export interface Skips230 {
  opening: number[];
  ending: any[];
}

export interface Hls230 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N231 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips231;
  hls: Hls231;
}

export interface Skips231 {
  opening: number[];
  ending: any[];
}

export interface Hls231 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N232 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips232;
  hls: Hls232;
}

export interface Skips232 {
  opening: number[];
  ending: any[];
}

export interface Hls232 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N233 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips233;
  hls: Hls233;
}

export interface Skips233 {
  opening: number[];
  ending: any[];
}

export interface Hls233 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N234 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips234;
  hls: Hls234;
}

export interface Skips234 {
  opening: number[];
  ending: any[];
}

export interface Hls234 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N235 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips235;
  hls: Hls235;
}

export interface Skips235 {
  opening: number[];
  ending: any[];
}

export interface Hls235 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N236 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips236;
  hls: Hls236;
}

export interface Skips236 {
  opening: number[];
  ending: any[];
}

export interface Hls236 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N237 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips237;
  hls: Hls237;
}

export interface Skips237 {
  opening: number[];
  ending: any[];
}

export interface Hls237 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N238 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips238;
  hls: Hls238;
}

export interface Skips238 {
  opening: number[];
  ending: any[];
}

export interface Hls238 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N239 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips239;
  hls: Hls239;
}

export interface Skips239 {
  opening: number[];
  ending: any[];
}

export interface Hls239 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N240 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips240;
  hls: Hls240;
}

export interface Skips240 {
  opening: number[];
  ending: any[];
}

export interface Hls240 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N241 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips241;
  hls: Hls241;
}

export interface Skips241 {
  opening: number[];
  ending: any[];
}

export interface Hls241 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N242 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips242;
  hls: Hls242;
}

export interface Skips242 {
  opening: number[];
  ending: any[];
}

export interface Hls242 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N243 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips243;
  hls: Hls243;
}

export interface Skips243 {
  opening: number[];
  ending: any[];
}

export interface Hls243 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N244 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips244;
  hls: Hls244;
}

export interface Skips244 {
  opening: number[];
  ending: any[];
}

export interface Hls244 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N245 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips245;
  hls: Hls245;
}

export interface Skips245 {
  opening: number[];
  ending: any[];
}

export interface Hls245 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N246 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips246;
  hls: Hls246;
}

export interface Skips246 {
  opening: number[];
  ending: any[];
}

export interface Hls246 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N247 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips247;
  hls: Hls247;
}

export interface Skips247 {
  opening: number[];
  ending: any[];
}

export interface Hls247 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N248 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips248;
  hls: Hls248;
}

export interface Skips248 {
  opening: number[];
  ending: any[];
}

export interface Hls248 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N249 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips249;
  hls: Hls249;
}

export interface Skips249 {
  opening: number[];
  ending: any[];
}

export interface Hls249 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N250 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips250;
  hls: Hls250;
}

export interface Skips250 {
  opening: number[];
  ending: any[];
}

export interface Hls250 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N251 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips251;
  hls: Hls251;
}

export interface Skips251 {
  opening: number[];
  ending: any[];
}

export interface Hls251 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N252 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips252;
  hls: Hls252;
}

export interface Skips252 {
  opening: number[];
  ending: any[];
}

export interface Hls252 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N253 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips253;
  hls: Hls253;
}

export interface Skips253 {
  opening: number[];
  ending: any[];
}

export interface Hls253 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N254 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips254;
  hls: Hls254;
}

export interface Skips254 {
  opening: number[];
  ending: any[];
}

export interface Hls254 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N255 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips255;
  hls: Hls255;
}

export interface Skips255 {
  opening: number[];
  ending: any[];
}

export interface Hls255 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N256 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips256;
  hls: Hls256;
}

export interface Skips256 {
  opening: number[];
  ending: any[];
}

export interface Hls256 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N257 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips257;
  hls: Hls257;
}

export interface Skips257 {
  opening: number[];
  ending: any[];
}

export interface Hls257 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N258 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips258;
  hls: Hls258;
}

export interface Skips258 {
  opening: number[];
  ending: any[];
}

export interface Hls258 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N259 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips259;
  hls: Hls259;
}

export interface Skips259 {
  opening: number[];
  ending: any[];
}

export interface Hls259 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N260 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips260;
  hls: Hls260;
}

export interface Skips260 {
  opening: number[];
  ending: any[];
}

export interface Hls260 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N261 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips261;
  hls: Hls261;
}

export interface Skips261 {
  opening: number[];
  ending: any[];
}

export interface Hls261 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N262 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips262;
  hls: Hls262;
}

export interface Skips262 {
  opening: number[];
  ending: any[];
}

export interface Hls262 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N263 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips263;
  hls: Hls263;
}

export interface Skips263 {
  opening: number[];
  ending: any[];
}

export interface Hls263 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N264 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips264;
  hls: Hls264;
}

export interface Skips264 {
  opening: number[];
  ending: any[];
}

export interface Hls264 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N265 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips265;
  hls: Hls265;
}

export interface Skips265 {
  opening: number[];
  ending: any[];
}

export interface Hls265 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N266 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips266;
  hls: Hls266;
}

export interface Skips266 {
  opening: number[];
  ending: any[];
}

export interface Hls266 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N267 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips267;
  hls: Hls267;
}

export interface Skips267 {
  opening: number[];
  ending: any[];
}

export interface Hls267 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N268 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips268;
  hls: Hls268;
}

export interface Skips268 {
  opening: number[];
  ending: any[];
}

export interface Hls268 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N269 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips269;
  hls: Hls269;
}

export interface Skips269 {
  opening: number[];
  ending: any[];
}

export interface Hls269 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N270 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips270;
  hls: Hls270;
}

export interface Skips270 {
  opening: number[];
  ending: any[];
}

export interface Hls270 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N271 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips271;
  hls: Hls271;
}

export interface Skips271 {
  opening: number[];
  ending: any[];
}

export interface Hls271 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N272 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips272;
  hls: Hls272;
}

export interface Skips272 {
  opening: number[];
  ending: any[];
}

export interface Hls272 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N273 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips273;
  hls: Hls273;
}

export interface Skips273 {
  opening: number[];
  ending: any[];
}

export interface Hls273 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N274 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips274;
  hls: Hls274;
}

export interface Skips274 {
  opening: number[];
  ending: any[];
}

export interface Hls274 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N275 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips275;
  hls: Hls275;
}

export interface Skips275 {
  opening: number[];
  ending: any[];
}

export interface Hls275 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N276 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips276;
  hls: Hls276;
}

export interface Skips276 {
  opening: number[];
  ending: any[];
}

export interface Hls276 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N277 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips277;
  hls: Hls277;
}

export interface Skips277 {
  opening: number[];
  ending: any[];
}

export interface Hls277 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N278 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips278;
  hls: Hls278;
}

export interface Skips278 {
  opening: number[];
  ending: any[];
}

export interface Hls278 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N279 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips279;
  hls: Hls279;
}

export interface Skips279 {
  opening: number[];
  ending: any[];
}

export interface Hls279 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N280 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips280;
  hls: Hls280;
}

export interface Skips280 {
  opening: number[];
  ending: any[];
}

export interface Hls280 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N281 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips281;
  hls: Hls281;
}

export interface Skips281 {
  opening: number[];
  ending: any[];
}

export interface Hls281 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N282 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips282;
  hls: Hls282;
}

export interface Skips282 {
  opening: number[];
  ending: any[];
}

export interface Hls282 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N283 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips283;
  hls: Hls283;
}

export interface Skips283 {
  opening: number[];
  ending: any[];
}

export interface Hls283 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N284 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips284;
  hls: Hls284;
}

export interface Skips284 {
  opening: number[];
  ending: any[];
}

export interface Hls284 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N285 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips285;
  hls: Hls285;
}

export interface Skips285 {
  opening: number[];
  ending: any[];
}

export interface Hls285 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N286 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips286;
  hls: Hls286;
}

export interface Skips286 {
  opening: number[];
  ending: any[];
}

export interface Hls286 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N287 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips287;
  hls: Hls287;
}

export interface Skips287 {
  opening: number[];
  ending: any[];
}

export interface Hls287 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N288 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips288;
  hls: Hls288;
}

export interface Skips288 {
  opening: number[];
  ending: any[];
}

export interface Hls288 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N289 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips289;
  hls: Hls289;
}

export interface Skips289 {
  opening: number[];
  ending: any[];
}

export interface Hls289 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N290 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips290;
  hls: Hls290;
}

export interface Skips290 {
  opening: number[];
  ending: any[];
}

export interface Hls290 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N291 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips291;
  hls: Hls291;
}

export interface Skips291 {
  opening: number[];
  ending: any[];
}

export interface Hls291 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N292 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips292;
  hls: Hls292;
}

export interface Skips292 {
  opening: number[];
  ending: any[];
}

export interface Hls292 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N293 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips293;
  hls: Hls293;
}

export interface Skips293 {
  opening: number[];
  ending: any[];
}

export interface Hls293 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N294 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips294;
  hls: Hls294;
}

export interface Skips294 {
  opening: number[];
  ending: any[];
}

export interface Hls294 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N295 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips295;
  hls: Hls295;
}

export interface Skips295 {
  opening: number[];
  ending: any[];
}

export interface Hls295 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N296 {
  episode: number;
  name: any;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips296;
  hls: Hls296;
}

export interface Skips296 {
  opening: number[];
  ending: any[];
}

export interface Hls296 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N297 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips297;
  hls: Hls297;
}

export interface Skips297 {
  opening: number[];
  ending: any[];
}

export interface Hls297 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N298 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips298;
  hls: Hls298;
}

export interface Skips298 {
  opening: number[];
  ending: any[];
}

export interface Hls298 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N299 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips299;
  hls: Hls299;
}

export interface Skips299 {
  opening: number[];
  ending: any[];
}

export interface Hls299 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N300 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips300;
  hls: Hls300;
}

export interface Skips300 {
  opening: number[];
  ending: any[];
}

export interface Hls300 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N301 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips301;
  hls: Hls301;
}

export interface Skips301 {
  opening: number[];
  ending: any[];
}

export interface Hls301 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N302 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips302;
  hls: Hls302;
}

export interface Skips302 {
  opening: number[];
  ending: any[];
}

export interface Hls302 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N303 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips303;
  hls: Hls303;
}

export interface Skips303 {
  opening: number[];
  ending: any[];
}

export interface Hls303 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N304 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips304;
  hls: Hls304;
}

export interface Skips304 {
  opening: number[];
  ending: any[];
}

export interface Hls304 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N305 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips305;
  hls: Hls305;
}

export interface Skips305 {
  opening: number[];
  ending: any[];
}

export interface Hls305 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N306 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips306;
  hls: Hls306;
}

export interface Skips306 {
  opening: number[];
  ending: any[];
}

export interface Hls306 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N307 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips307;
  hls: Hls307;
}

export interface Skips307 {
  opening: number[];
  ending: any[];
}

export interface Hls307 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N308 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips308;
  hls: Hls308;
}

export interface Skips308 {
  opening: number[];
  ending: any[];
}

export interface Hls308 {
  fhd: string;
  hd: string;
  sd: string;
}

export interface N309 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips309;
  hls: Hls309;
}

export interface Skips309 {
  opening: number[];
  ending: any[];
}

export interface Hls309 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface N310 {
  episode: number;
  name: string;
  uuid: string;
  created_timestamp: number;
  preview: string;
  skips: Skips310;
  hls: Hls310;
}

export interface Skips310 {
  opening: number[];
  ending: any[];
}

export interface Hls310 {
  fhd: any;
  hd: string;
  sd: string;
}

export interface Rutube {}

export interface Torrents {
  episodes: Episodes2;
  list: List3[];
}

export interface Episodes2 {
  first: number;
  last: number;
  string: string;
}

export interface List3 {
  torrent_id: number;
  episodes: Episodes3;
  quality: Quality;
  leechers: number;
  seeders: number;
  downloads: number;
  total_size: number;
  size_string: string;
  url: string;
  magnet: string;
  uploaded_timestamp: number;
  hash: string;
  metadata: any;
  raw_base64_file: any;
}

export interface Episodes3 {
  first: number;
  last: number;
  string: string;
}

export interface Quality {
  string: string;
  type: string;
  resolution: string;
  encoder: string;
  lq_audio: any;
}
