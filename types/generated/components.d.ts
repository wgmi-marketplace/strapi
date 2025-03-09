import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentComponent extends Struct.ComponentSchema {
  collectionName: 'components_component_components';
  info: {
    description: '';
    displayName: 'component';
    icon: 'layer';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files'>;
  };
}

export interface KeywordsArray extends Struct.ComponentSchema {
  collectionName: 'components_keywords_arrays';
  info: {
    displayName: 'array';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface KeywordsKeywords extends Struct.ComponentSchema {
  collectionName: 'components_keywords_keywords';
  info: {
    description: '';
    displayName: 'keywords';
    icon: 'bulletList';
  };
  attributes: {
    keyword: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.component': ComponentComponent;
      'keywords.array': KeywordsArray;
      'keywords.keywords': KeywordsKeywords;
    }
  }
}
