import type { Schema, Struct } from '@strapi/strapi';

export interface GlossaryDetail extends Struct.ComponentSchema {
  collectionName: 'components_glossary_details';
  info: {
    description: 'One labeled row under a glossary term, e.g. Good to know. The label is whatever fits the term.';
    displayName: 'Detail';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface RoundupPick extends Struct.ComponentSchema {
  collectionName: 'components_roundup_picks';
  info: {
    description: 'One product in a roundup post. Place it in the body with [[pick 1]], [[pick 2]] and so on.';
    displayName: 'Pick';
    icon: 'star';
  };
  attributes: {
    label: Schema.Attribute.String;
    link: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    photo: Schema.Attribute.Media<'images'>;
    photoAlt: Schema.Attribute.String;
    photoUrl: Schema.Attribute.String;
    priceNote: Schema.Attribute.String;
    review: Schema.Attribute.Relation<'oneToOne', 'api::review.review'>;
    writeUp: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'glossary.detail': GlossaryDetail;
      'roundup.pick': RoundupPick;
    }
  }
}
