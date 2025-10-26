export interface Move {
  accuracy: number;
  id: number;
  name: string;
  pp: number;
  power: number;
  damage_class: {
    name: string;
    url: string;
  }
}

export interface MoveResponse {
  move: {
    name: string;
    url: string;
  }
  version_group_details: {
    level_learned_at: number;
    move_learn_method: {
      name: string;
      url: string;
    }
  }[];
}