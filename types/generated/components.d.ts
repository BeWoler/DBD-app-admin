import type { Schema, Struct } from '@strapi/strapi';

export interface TemplatesAbilityTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_ability_templates';
  info: {
    description: '';
    displayName: 'AbilityTemplate';
  };
  attributes: {
    addons: Schema.Attribute.Component<'templates.addon-template', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplatesAddonTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_addon_templates';
  info: {
    displayName: 'AddonTemplate';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplatesCharacterTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_character_templates';
  info: {
    displayName: 'CharacterTemplate';
  };
  attributes: {
    bio: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    info: Schema.Attribute.Text & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplatesItemTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_item_templates';
  info: {
    displayName: 'ItemTemplate';
  };
  attributes: {
    addons: Schema.Attribute.Component<'templates.addon-template', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplatesOfferingTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_offering_templates';
  info: {
    displayName: 'OfferingTemplate';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TemplatesPerkTemplate extends Struct.ComponentSchema {
  collectionName: 'components_templates_perk_templates';
  info: {
    displayName: 'PerkTemplate';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'templates.ability-template': TemplatesAbilityTemplate;
      'templates.addon-template': TemplatesAddonTemplate;
      'templates.character-template': TemplatesCharacterTemplate;
      'templates.item-template': TemplatesItemTemplate;
      'templates.offering-template': TemplatesOfferingTemplate;
      'templates.perk-template': TemplatesPerkTemplate;
    }
  }
}
