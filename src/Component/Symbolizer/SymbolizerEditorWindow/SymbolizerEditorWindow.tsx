/* Released under the BSD 2-Clause License
 *
 * Copyright © 2018-present, terrestris GmbH & Co. KG and GeoStyler contributors
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 *
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

import * as React from 'react';

import { Symbolizer } from 'geostyler-style';

import MultiEditor from '../MultiEditor/MultiEditor';
import { IconLibrary } from '../IconSelector/IconSelector';

import { Data } from 'geostyler-data';

import './SymbolizerEditorWindow.less';
import { Modal, ModalProps } from 'antd';

import { localize } from '../../LocaleWrapper/LocaleWrapper';
import en_US from '../../../locale/en_US';

import _isEqual from 'lodash/isEqual';
import type GeoStylerLocale from '../../../locale/locale';

// non default props
export interface SymbolizerEditorWindowProps extends Partial<ModalProps> {
  locale?: GeoStylerLocale['SymbolizerEditorWindow'];
  symbolizers: Symbolizer[];
  internalDataDef?: Data;
  onClose?: () => void;
  onSymbolizersChange?: (symbolizers: Symbolizer[]) => void;
  iconLibraries?: IconLibrary[];
  colorRamps?: {
    [name: string]: string[];
  };
}

const COMPONENTNAME = 'SymbolizerEditorWindow';

export const SymbolizerEditorWindow: React.FC<SymbolizerEditorWindowProps> = ({
  locale = en_US.SymbolizerEditorWindow,
  symbolizers,
  internalDataDef,
  onClose,
  onSymbolizersChange,
  iconLibraries,
  colorRamps,
  ...passThroughProps
}) => {

  return (
    <Modal
      className="symbolizer-editor-modal"
      title={locale.symbolizersEditor}
      onCancel={onClose}
      width={800}
      footer={false}
      centered={true}
      {...passThroughProps}
    >
      <MultiEditor
        internalDataDef={internalDataDef}
        symbolizers={symbolizers}
        onSymbolizersChange={onSymbolizersChange}
        iconLibraries={iconLibraries}
        editorProps={{colorRamps}}
      />
    </Modal>
  );
};

export default localize(SymbolizerEditorWindow, COMPONENTNAME);
